import React from 'react'

function Posts(props) {
    return (
        <>
        {props.profilePosts.map((a) => {
            return (
                <div className="onePost">
                    <div className="overImage">
                        <img className="image" src = {a.img}></img>
                        <img className="type" src = {a.type}></img>
                    </div>
                </div>
            )
        })}</>
    )
}

export default Posts