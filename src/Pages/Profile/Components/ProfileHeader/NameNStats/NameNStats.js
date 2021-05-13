import React from 'react'
import './NameNStats.scss'

function NameNStats(props) {
    return (
        <div className="nameNStats">
            <div className="name">
                <h2><a>{props.name}</a></h2>
                <button>프로필 편집</button>
                <img src="/image/setting.png" />
            </div>
            <div className="stats">
                {console.log(props)}
                <span>게시물<a> {props.stats[0]}</a></span>
                <span>팔로워<a> {props.stats[1]}</a></span>
                <span>팔로우<a> {props.stats[2]}</a></span>
            </div>
        </div>
    )
}

export default NameNStats