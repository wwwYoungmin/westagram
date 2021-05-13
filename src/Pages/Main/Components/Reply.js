import React, { useState } from 'react'
import './Reply.scss';
import OneReply from './OneReply';

function Reply(props) {
    const user = "myself";
    const [reply, setReply] = useState();
    const [replyList, setReplyList] = useState(props.replies);
    const onReply = (event) => {
        setReply(event.target.value);
    }
    const addReply = () => {
        setReplyList([...replyList, {name: user, reply: reply, isLiked: false}]);
        setReply('');
    }

    return (
        <div className="reply">
            <p className="seeReply">댓글 {replyList.length}개 모두 보기</p>
            {replyList.map((a) => {
                return <OneReply data={a}/>
            })}
            <p className="time">{props.time} 전</p>
            <div className="input">
                <img src="/image/smile.png"></img>
                <input className="inputReply" value={reply} onChange={onReply} placeholder={'댓글 달기...'}></input>
                <p onClick={addReply}>게시</p>
            </div>
        </div>
    )
}

export default Reply
