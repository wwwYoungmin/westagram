import React, {useState} from 'react';
import './Middle.scss';

function Middle(props) {
    const [index,setIndex] = useState(0);
    const eventHandlerR = () => {
        if (index < props.imgs.length-1) {
            setIndex(index + 1);
        }
    }
    const eventHandlerL = () =>{
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    return (
        <div className="middle">
            <button className="leftB" onClick={eventHandlerL}>&lt;</button>
            <img src = {props.imgs[index]}></img>
            <button className="rightB" onClick={eventHandlerR}>&gt;</button>
        </div>
    )
}

export default Middle
