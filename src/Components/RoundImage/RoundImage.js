import React from "react";
import "./RoundImage.scss";
import { useHistory } from 'react-router-dom';

export function BigProfile(props) {
  return <div className="bigProfile">
            <img src={props.profileImg} />
            <img className="roundLive" src="/image/roundLive2.png" />     
         </div>
}

export function MediumProfile(props) {
  return (
    <div className="mediumProfile">
      <img className="mediumImage" src={props.img} />
      <img className="roundLive" src="/image/roundLive2.png" />
    </div>
  )
}

export function SmallProfile(props) {
  let history = useHistory();
  const goToProfile = () => {
      history.push("/profile/1")
  }
  return <div className="smallProfile" onClick={goToProfile}>
            <img className="profileImg" src={props.profileImg} /> 
            <img className="roundLive" src="/image/roundLive2.png" /> 
         </div>
}

export function IconProfile(props) {
  let history = useHistory();
  const goToProfile = () => {
      history.push("/profile/1")
  }
  return <span className="iconProfile" onClick={goToProfile}>
            <img src={props.profileImg} />  
         </span>
}