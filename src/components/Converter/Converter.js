import ScaleInput from '../ScalesInputs/ScaleInput';
import { useConversion } from '../../utils/ConversionMethods';
import './Converter.css';

const Converter = () => {
    const {fahrenheitValue, celsiusValue, handleChange, scale, errors} = useConversion();

    return (
        <div className="converter-container">
            {(scale !== '' && scale === 'C') &&
            <p className="formula-p"><span className="formula-text">Formula</span> (<b>{fahrenheitValue} ºF</b> - 32) *
                5 / 9</p>}
            {(scale !== '' && scale === 'F') &&
            <p className="formula-p"><span className="formula-text">Formula</span> (<b>{celsiusValue} ºC</b> * 9 / 5) +
                32</p>}
            <ScaleInput
                value={fahrenheitValue}
                scale='F'
                handleValueChange={handleChange('F')}
            />
            <ScaleInput
                value={celsiusValue}
                scale='C'
                handleValueChange={handleChange('C')}
            />
            {errors.input && <p className="errors">{errors.input}</p>}
        </div>
    )
}

export default Converter;