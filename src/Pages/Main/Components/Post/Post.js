import React from 'react'
import './Post.scss';
import PostHeader from '../PostHeader/PostHeader'
import PostImages from '../PostImages/PostImages'
import PostTexts from '../PostTexts/PostTexts'
import Reply from '../PostReplies/Reply'

function Post(props) {
    return (
        <div className="post">
            <PostHeader id={props.data.id}
                 name={props.data.name}
                 img={props.data.img}/>
            <PostImages imgs={props.data.imgs}/>
            <div>
                <PostTexts iLiked={props.data.iLiked}
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
