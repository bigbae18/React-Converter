export const useConversionMethods = () => {
    function toCelsius(f) {
        return (f - 32) * 5 / 9;
    }
    function toFahrenheit(c) {
        return (c * 9 / 5) + 32;
    }
    
    return {
        toCelsius,
        toFahrenheit
    }
}