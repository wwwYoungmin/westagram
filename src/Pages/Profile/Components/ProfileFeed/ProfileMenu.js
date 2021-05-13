import React, {useState} from 'react'
import "./ProfileFeed.scss"

function ProfileMenu(props) {
    const [isClicked, setIsClicked] = useState(props.clicked);
    const onIsClicked = () => {
        setIsClicked (!isClicked)
    }
    const twoFunctions = () => {
        props.setMenuChosen(props.index);
        onIsClicked();
    }

    return (
        <a style={{opacity: isClicked ? "100%" : "50%"}} onClick={twoFunctions}>
            <img src={props.img}></img>
            <span>{props.menu}</span>
        </a>
    )
}

export default ProfileMenu
