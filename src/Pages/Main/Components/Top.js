import React from 'react'
import { useHistory } from 'react-router-dom'
import './Top.scss'

function Top(props) {
    let history = useHistory();
    const goToProfile = () => {
        history.push(`/profile/${props.id}`)
    }

    return (
        <div className="top">
            <img src={props.img} onClick={goToProfile}></img>
            <p className="name" onClick={goToProfile}>{props.name}</p>
            <p className="button">...</p>
        </div>
    )
}

export default Top
