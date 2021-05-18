import React from "react";
import "./RoundImage.scss";
import { useHistory } from 'react-router-dom';

export function RoundProfile(props) {
  return <div className="roundProfile">
            <img src={props.profileImg} />
            <img className="roundLive" src="/image/roundLive.png" />     
         </div>
}

export function SmallProfile(props) {
  let history = useHistory();
  const goToProfile = () => {
      history.push("/profile/1")
  }
  return <span className="smallProfile" onClick={goToProfile}>
            <img src={props.profileImg} />  
         </span>
}

export function RoundStory(props) {
  return <div className="roundStory">
            <ul>
              <li className="margin"></li>
              {props.roundStory.map((a)=>{
                return <>
                <li className="oneStory">
                  <div className="oneRound">
                      <img src={a.img} />
                  </div>
                  <div className="storyName">{a.name}</div>
                </li>
                </>
              })}
              <li className="margin"></li>
            </ul>
        </div>
}
