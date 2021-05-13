import React from 'react'

function Igtv(props) {
    return (
        <>
        {props.profileIgtv.map((a) => {
            return (
                <div className="oneIgtv">
                    <div className="overImage">
                        <img className="image" src = {a.img}></img>
                        <p className="time">{a.time}</p>
                        <p className="type">{a.type}</p>
                    </div>
                </div>
            )
        })}</>
    )
}

export default Igtv