import { useEffect, useState } from 'react';
import ScaleInput from '../ScalesInputs/ScaleInput';
import { useConversionMethods } from '../../utils/ConversionMethods';
import './Converter.css';

const Converter = () => {

    const [celsiusValue, setCelsiusValue] = useState('');
    const [fahrenheitValue, setFahrenheitValue] = useState('');
    const [scale, setScale] = useState('');
    const [errors, setErrors] = useState({})

    const conversor = useConversionMethods();


    const handleFahrenheitChange = value => {
        setFahrenheitValue(value);
        setScale('C');
        const celsiusConvertedValue = tryConvertion(value, conversor.toCelsius);
        setCelsiusValue(celsiusConvertedValue);
    }

    const handleCelsiusChange = value => {
        setCelsiusValue(value)
        setScale('F');
        const fahrenheitConvertedValue = tryConvertion(value, conversor.toFahrenheit);
        setFahrenheitValue(fahrenheitConvertedValue);
    }

    const tryConvertion = (value, callback) => {
        if (isNaN(value) || value === '') {
            setErrors({
                ...errors,
                input: 'There is no valid number to convert.'
            });
            setScale('');
            return ''
        }
        const parsedValue = parseFloat(value);
        const output = callback(parsedValue)
        const roundedOutput = Math.round(output * 1000) / 1000;
        setErrors({})
        return roundedOutput.toString()
    }

    return (
        <div className="converter-container">
            {(scale !== '' && scale === 'C') && <p className="formula-p"><span className="formula-text">Formula</span> (<b>{fahrenheitValue} ºF</b> - 32) * 5 / 9</p>}
            {(scale !== '' && scale === 'F') && <p className="formula-p"><span className="formula-text">Formula</span> (<b>{celsiusValue} ºC</b> * 9 / 5) + 32</p>}
            <ScaleInput
                value={fahrenheitValue}
                scale='F'
                handleValueChange={handleFahrenheitChange}
                />
            <ScaleInput
                value={celsiusValue}
                scale='C'
                handleValueChange={handleCelsiusChange}
                />
            {errors.input && <p className="errors">{errors.input}</p>}
        </div>
    )
}

export default Converter