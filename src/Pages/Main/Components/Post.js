import React from 'react'
import './Post.scss';
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'
import Reply from './Reply'

function Post(props) {
    return (
        <div className="post">
            <Top id={props.id}
                 name={props.name}
                 img={props.img}/>
            <Middle imgs={props.imgs}/>
            <div>
                <Bottom iLiked={props.iLiked}
                        saved={props.saved}
                        liked={props.liked}
                        likedImg={props.likedImg}
                        likes={props.likes}
                        name={props.name}
                        text={props.text}
                        img={props.img}/>
                <Reply time={props.time}
                       replies={props.replies}/>
            </div> 
        </div>
    )
}

export default Post;
