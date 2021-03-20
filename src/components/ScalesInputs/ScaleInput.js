import './ScaleInput.css';

const formattedNames = {
    C: 'Celsius',
    F: 'Fahrenheit'
}

const ScaleInput = ({ scale, value, handleValueChange }) => {

    const handleChange = e => {
        handleValueChange(e.target.value);
    }

    return (
        <div className="input-container">
            <label for={formattedNames[scale]}>Insert temperature in <b>{formattedNames[scale]}</b>
            <input
                id={formattedNames[scale]}
                type="text"
                className="input-control"
                value={value}
                autoComplete="off"
                onChange={handleChange} 
            /></label>
        </div>
    )
}

export default ScaleInput