import React from 'react'
import "./IconSet.scss"
import { useHistory } from 'react-router-dom';

export function Heart() {
    return (
        <img className="heart" src="/image/heart.png"></img>    
    )
}

export function Reply() {
    return (
        <img className="reply" src="/image/comment.png"></img>
    )
} 

export function Message() {
    return (
        <img className="message" src="/image/message.png"></img>
    )
}

export function Home() {
    let history = useHistory();
    const goToMain = () => {
        history.push("/")
    }

    return (
        <img className="home" src="/image/home.png" onClick={goToMain}></img>
    )
}

export function Compass() {
    return (
        <img className="compass" src="/image/compass.png"></img>
    )
}