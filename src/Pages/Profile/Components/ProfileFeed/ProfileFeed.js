import React, {useState} from 'react'
import Posts from "./Posts";
import Reels from "./Reels";
import Igtv from "./Igtv";
import Tagged from "./Tagged";
import ProfileMenu from "./ProfileMenu";
import './ProfileFeed.scss';

function ProfileFeed(props) {
    const [menuChosen, setMenuChosen] = useState(0)
    const menuBar = {
        0: <Posts profilePosts={props.profilePosts}/>,
        1: <Reels profileReels={props.profileReels}/>,
        2: <Igtv profileIgtv={props.profileIgtv}/>,
        3: <Tagged profileTagged={props.profileTagged}/>
    }
    const profileMenu = [
        {menu: "게시물", img: "/image/posts.png", index: 0, clicked: true},
        {menu: "릴스", img: "/image/reels.png", index: 1, clicked: false},
        {menu: "IGTV", img: "/image/igtv.png", index: 2, clicked: false},
        {menu: "태그됨", img: "/image/tagged.png", index: 3, clicked: false}
    ]

    return (
        <div className="profileFeed">
            <div className="menuBar">
                {profileMenu.map((a)=>{
                    return (
                        <ProfileMenu
                            setMenuChosen={(e) => setMenuChosen(e)}
                            index={a.index}
                            menu={a.menu}
                            img={a.img}
                            clicked={a.clicked}/>
                    )
                })}
            </div>
            <div className="feedComponents">
                {menuBar[menuChosen]}
            </div>
        </div>
    )
}

export default ProfileFeed
