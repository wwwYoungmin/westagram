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
            <div className="appendix">
                <ul>
                    <li><a>소개</a></li> ∙ 
                    <li><a>도움말</a></li> ∙ 
                    <li><a>홍보 센터</a></li> ∙ 
                    <li><a>API</a></li> ∙ 
                    <li><a>채용 정보</a></li> ∙ 
                    <li><a>개인정보처리방침</a></li> ∙ 
                    <li><a>약관</a></li> ∙ 
                    <li><a>위치</a></li> ∙ 
                    <li><a>인기 계정</a></li> ∙ 
                    <li><a>해시태그</a></li> ∙ 
                    <li><a>언어</a></li>
                </ul>
                <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
            </div>
        </div>
    )
}

export default SideBox
