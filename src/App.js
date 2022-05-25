import React, { useState } from "react";
import './Index.css';

const App = () => {
    const [tempValue, setTempValue] = useState(10);
    const [tempColor, setTempColor] = useState('cold');

    const increaseTemp = () => {
        if(tempValue === 30)
            return;

        const newTempValue = tempValue + 1;

        setTempValue(newTempValue);

        if(newTempValue >= 15) {
            setTempColor('hot');
        }
    }

    const decreaseTemp = () => {
        if(tempValue === 0)
            return;

        const newTempValue = tempValue - 1;
        
        setTempValue(newTempValue);

        if(newTempValue < 15) {
            setTempColor('cold');
        }
    }

    return(
        <div className="app-container">
            <div className="temperature-display-container">
                <div className={`temperature-display ${tempColor}`}>{ tempValue }°C</div>
            </div>
            <div className="button-container">
                <button onClick={ () => increaseTemp() }>+</button>
                <button onClick={ () => decreaseTemp() }>-</button>
            </div>
        </div>
    )
}

export default App;