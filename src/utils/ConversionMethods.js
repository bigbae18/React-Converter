import { useReducer } from 'react';

const initialState = {
    fahrenheitValue: '',
    celsiusValue: '',
    errors: {},
    scale: '',
};

const toCelsius = (f) => {
    return (f - 32) * 5 / 9;
}

const toFahrenheit = (c) => {
    return (c * 9 / 5) + 32;
}

const tryConversion = (value, callback) => {
    if (isNaN(value) || value === '') {
        return ''
    }
    const parsedValue = parseFloat(value);
    const output = callback(parsedValue)
    const roundedOutput = Math.round(output * 1000) / 1000;
    return roundedOutput.toString()
}

const reducer = (state, {type, payload}) => {

    switch (type) {
        case 'C':
            const newFahrenheitValue = tryConversion(payload, toFahrenheit);
            return {
                ...state,
                celsiusValue: payload,
                scale: newFahrenheitValue !== '' ? 'F' : '',
                fahrenheitValue: newFahrenheitValue,
                errors: newFahrenheitValue !== '' ? {} : {
                    ...state.errors,
                    input: 'There is no valid number to convert.',
                }
            };
        case 'F':
            const newCelsiusValue = tryConversion(payload, toCelsius);
            return {
                ...state,
                fahrenheitValue: payload,
                scale: newCelsiusValue !== '' ? 'C' : '',
                celsiusValue: newCelsiusValue,
                errors: newCelsiusValue !== '' ? {} : {
                    ...state.errors,
                    input: 'There is no valid number to convert.',
                },
            };
        default:
            throw new Error('Type can only be C or F');
    }
}

export const useConversion = () => {
    const [{celsiusValue, fahrenheitValue, scale, errors }, dispatch] = useReducer(reducer, initialState);

    const handleChange = (unit) => (value) => {
        dispatch({ type: unit, payload: value});
    };

    return {
        celsiusValue,
        fahrenheitValue,
        scale,
        errors,
        handleChange,
    };
};