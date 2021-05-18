import React from "react";
import "./Main.scss";
import Feed from './Components/Feed/Feed';
import { MainStories } from '../../Components/Stories/Stories'
import SideBox from "./Components/SideBox/SideBox"

function Main() {
  return (
    <div className="main">
      <div className="mainFeed">
        <MainStories />
        <Feed />
      </div>
      <div>
        <SideBox />
      </div>
    </div>
    )
}

export default Main;