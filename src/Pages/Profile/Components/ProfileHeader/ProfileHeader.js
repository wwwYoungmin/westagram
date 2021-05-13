import React from 'react'
import { RoundProfile } from '../../../../Components/RoundImage/RoundImage'
import NameNStats from './NameNStats/NameNStats'
import Description from './Description/Description'
import './ProfileHeader.scss';

function ProfileHeader(props) {
    return (
        <div className="profileHeader">
            <div className="profileImage">
                <RoundProfile
                    profileImg={props.profileImg}/>
            </div>
            <div className="profileDescription">
                <NameNStats
                    name={props.name}
                    stats={props.stats}/>
                <Description
                    description={props.description}
                    biolink={props.biolink}
                    followedBy={props.followedBy}
                    followedNum={props.followedNum}/>
            </div>
        </div>
    )
}

export default ProfileHeader