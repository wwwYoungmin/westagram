import React from 'react'
import { useHistory } from 'react-router-dom'
import './PostHeader.scss'

function PostHeader(props) {
    let history = useHistory();
    const goToProfile = () => {
        history.push(`/profile/${props.id}`)
    }

    return (
        <div className="postHeader">
            <img src={props.img} onClick={goToProfile}></img>
            <p className="name" onClick={goToProfile}>{props.name}</p>
            <p className="button">...</p>
        </div>
    )
}

export default PostHeader
