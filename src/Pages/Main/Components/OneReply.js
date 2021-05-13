import React, { useState } from 'react';

function OneReply(props) {
    const [isLiked, setIsLiked] = useState(props.isLiked);
    const onIsLiked = () => {
        setIsLiked (!isLiked);
    }
    return (
        <div className="oneReply">
            <span className="name">{props.data.name}</span> <span>{props.data.reply}</span>
            <img src={isLiked ? "./image/heart_full.png" : "./image/heart.png"}
                 onClick={onIsLiked}></img>
        </div>
    )
}

export default OneReply