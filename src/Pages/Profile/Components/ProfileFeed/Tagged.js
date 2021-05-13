import React from 'react'

function Tagged(props) {
    return (
        <>
        {props.profileTagged.map((a) => {
            return (
                <div className="onePost">
                    <div className="overImage">
                        <img className="image" src = {a.img}></img>
                    </div>
                </div>
            )
        })}</>
    )
}

export default Tagged;