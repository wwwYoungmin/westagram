import React from 'react'
import "./NavBar.scss"
import { SmallProfile } from '../RoundImage/RoundImage'
import { Home, Message, Compass, Heart } from "../IconSet/IconSet"
import { profileData } from "../../Pages/Profile/profileData"
import { useHistory } from 'react-router-dom'

function NavBar() {
    let history = useHistory();
    const goToMain = () => {
        history.push("/")
    }

    return (
        <div className="navBar">
            <div className="navBarContents">
                <a className="navBarLogo" onClick={goToMain}><img src="/image/logo.png"></img></a>
                <input type="text" placeholder="검색"></input>
                <div>
                    <Home />
                    <Message />
                    <Compass />
                    <Heart />
                    <SmallProfile
                        profileImg={profileData[1].profileImg}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar
