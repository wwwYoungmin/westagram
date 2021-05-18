import React from 'react'
import "./Stories.scss"
import { storydata } from '../../Pages/Main/Components/maindata'
import {MediumProfile} from '../RoundImage/RoundImage'

export function ProfileStories(props) {
    return <div className="profileStories">
              <ul>
                <li className="margin"></li>
                {props.profileStory.map((a)=>{
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

export function MainStories() {
  return (
    <div className="mainStories">
      <ul>
        <li className="margin"></li>
        {storydata.map((a)=>{
          return <li className="mainStory">
                    <div><MediumProfile img={a.img} /></div>
                    <div className="mainStoryName">{a.name}</div>
                 </li>
        })}
        <li className="margin"></li>
      </ul>
    </div>
  )
}