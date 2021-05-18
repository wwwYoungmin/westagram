import React, { useState } from 'react'
import './PostTexts.scss';

function PostTexts(props) {
    // let variableILiked = props.iLiked;
    // let variableSaved = props.saved;
    const [iLiked, setILiked] = useState(props.iLiked);
    const onILiked = () => {
        setILiked (!iLiked);
        // variableILiked = !variableILiked;
    }
    const [isSaved, setIsSaved] = useState(props.saved);
    const onIsSaved = () => {
        setIsSaved (!isSaved);
        // variableSaved = !variableSaved;
    }

    return (
        <div>
            <div className="icons">
                <img className="heart"
                     src={iLiked ? "./image/heart_full.png" : "./image/heart.png"}
                     onClick={onILiked}></img>
                <img className="reply" src="./image/comment.png"></img>
                <img className="message" src="./image/message.png"></img>
                <img className="save"
                     src={isSaved ? "./image/bookmark_full.png" : "./image/bookmark.png"}
                     onClick={onIsSaved}></img>
                     {/* {console.log(variableSaved)} */}
            </div>
            <p className="underIcons">
                <span><img src={props.likedImg}></img></span>
                <span>{props.liked}</span>님
                <span className="likes">{props.likes}</span>이 좋아합니다.</p>
            <div className="idAndText">
                <span className="name">{props.name} </span>
                <span className="text">{props.text}</span>
            </div>
        </div>
    )
}

export default PostTexts
