import React, {useState, useEffect} from 'react'
import { postdata } from './data';
import Post from './Post';
import Loading from '../../../Components/Loading/Loading';
import './Feed.scss'

function Feed() {
    const [data, setData] = useState([])
    const getData = () => {
        setData(postdata)
    }

    useEffect(()=> {
        setTimeout(()=>{
        getData();    
        }, 2000)
        return () => {}
    }, [])

    return (
        <div className="feed">
            {data.length <= 0 ? <Loading /> : 
            data.map((content) => (
                <Post id={content.id}
                      name={content.name}
                      img={content.img}
                      imgs={content.imgs}
                      iLiked={content.iLiked}
                      saved={content.saved}
                      liked={content.liked}
                      likedImg={content.likedImg}
                      likes={content.likes}
                      text={content.text}
                      time={content.time}
                      replies={content.replies}/>
            ))}
        </div>
    )
}

export default Feed
