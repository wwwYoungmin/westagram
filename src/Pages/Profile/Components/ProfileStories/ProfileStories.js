import React from 'react'
import './ProfileStories.scss';
import {RoundStory} from '../../../../Components/RoundImage/RoundImage';

function ProfileStories(props) {
    return (
        <div className="profileStories">
            <RoundStory
                roundStory={props.roundStory}/>
        </div>
    )
}

export default ProfileStories
