import React from 'react'
import './Post.scss';
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'
import Reply from './Reply'

function Post(props) {
    return (
        <div className="post">
            <Top id={props.data.id}
                 name={props.data.name}
                 img={props.data.img}/>
            <Middle imgs={props.data.imgs}/>
            <div>
                <Bottom iLiked={props.data.iLiked}
                        saved={props.data.saved}
                        liked={props.data.liked}
                        likedImg={props.data.likedImg}
                        likes={props.data.likes}
                        name={props.data.name}
                        text={props.data.text}
                        img={props.data.img}/>
                <Reply time={props.data.time}
                       replies={props.data.replies}/>
            </div> 
        </div>
    )
}

export default Post;
