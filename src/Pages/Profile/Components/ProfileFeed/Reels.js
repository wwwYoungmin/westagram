import React from 'react'

function Reels(props) {
    return (
        <>
        {props.profileReels.map((a) => {
            return (
                <div className="oneReel">
                    <div className="overImage">
                        <img className="image" src = {a.img}></img>
                        <div className="type">
                            <img src = {a.type}></img>
                            <span>{a.view}</span>
                        </div>
                    </div>
                </div>
            )
        })}</>
    )
}

export default Reels;