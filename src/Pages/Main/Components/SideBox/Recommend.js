import React from 'react'
import './Recommend.scss'
import { SmallProfile } from '../../../../Components/RoundImage/RoundImage'

function Recommend(props) {
    return (
        <div className="recommend">
            <span className="recommendedImg">
                <SmallProfile profileImg={props.data.profileImg} />
            </span>
            <span>
                <p className="recommendedName">{props.data.name}</p>
                <p className="whyRecommend">{props.data.whyFollow}</p>
            </span>
            <span>
                <p className="follow">팔로우</p>
            </span>
        </div>
    )
}

export default Recommend
