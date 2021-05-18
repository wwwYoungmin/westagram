import React from 'react'
import Recommend from "./Recommend"
import { recommendData } from '../maindata'
import { profileData } from "../../../Profile/profileData"
import { IconProfile } from "../../../../Components/RoundImage/RoundImage"
import { useHistory } from "react-router-dom"
import "./SideBox.scss"

function SideBox() {
    let history = useHistory();
    const goToProfile = () => {
        history.push("/profile/1")
    }

    return (
        <div className="sideBox">
            <div className="sideProfile">
                <span onClick={goToProfile}>
                    <IconProfile profileImg={profileData[1].profileImg}/>
                </span>
                <span>
                    <p className="name" onClick={goToProfile}>{profileData[1].name}</p>
                    <p className="description">{profileData[1].description[0]}</p>
                </span>
                <span><p className="switch">전환</p></span>
            </div>
            <div className="recommendHeader">
                <p>회원님을 위한 추천</p>
                <p className="seeAll">모두 보기</p>
            </div>
            {recommendData.map((a)=>{
                return <Recommend data={a}/>
            })}
        </div>
    )
}

export default SideBox
