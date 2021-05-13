import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import "./Profile.scss";
import { profileData } from "./profileData";
import Loading from "../../Components/Loading/Loading";
import ProfileHeader from "./Components/ProfileHeader/ProfileHeader";
import ProfileStories from "./Components/ProfileStories/ProfileStories";
import ProfileFeed from "./Components/ProfileFeed/ProfileFeed";

function Profile() {
  const [data, setData] = useState();
  const params = useParams();

  // useEffect(()=>{
  //   setData(profileData[params.id]);
  // }, []);

  const getData = () => {
    setData(profileData[params.id])
  }

  useEffect(()=> {
    setTimeout(()=>{
      getData();}, 1000)
    return () => {}
  }, [])


  return (
    <div className="profile">
          {!data ? <Loading /> : <>
          <ProfileHeader
            profileImg={data.profileImg}
            name={data.name}
            stats={data.stats}
            description={data.description}
            biolink={data.biolink}
            followedBy={data.followedBy}
            followedNum={data.follwedNum}/>
          <ProfileStories
            roundStory={data.roundStory}/>
          <ProfileFeed
            profilePosts={data.profilePosts}
            profileReels={data.profileReels}
            profileIgtv={data.profileIgtv}
            profileTagged={data.profileTagged}/>
            </>
          }
     </div>
  );
}

export default Profile;
