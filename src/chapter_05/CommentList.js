import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이건호",
        comment: "안녕하세요 이건호입니다."
    },
    {
        name: "이건호2",
        comment: "안녕하세요 이건호2입니다."
    },
    {
        name: "이건호3",
        comment: "안녕하세요 이건호3입니다."
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((foo)=> {
                return (
                    <Comment name={foo.name} comment={foo.Comment} />
                )
            })}
        </div>
    )
}
export default CommentList;