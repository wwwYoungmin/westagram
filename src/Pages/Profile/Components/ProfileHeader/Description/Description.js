import React from 'react'
import './Description.scss'

function Description(props) {
    return (
        <div className="description">
            <h1>{props.description[0]}</h1>
            <p>{props.description[1]}<br/>
            <a>{props.description[2]}</a>and <a>{props.description[3]}</a><br />
            <a className="bioLink">{props.biolink}</a></p>
            <p className="followed">Followed by <span className="followedBy">{props.followedBy}</span> +{props.followedNum} more</p>
        </div>
    )
}

export default Description
