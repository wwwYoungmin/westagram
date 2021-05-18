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
        }, 500)
        return () => {}
    }, [])

    return (
        <div className="feed">
            {data.length <= 0 ? <Loading /> : 
            data.map((content) => (
                <Post data={content}/>
            ))}
        </div>
    )
}

export default Feed
