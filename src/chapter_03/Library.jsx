import React from "react";
import Book from "./Book"

function Library(props) {
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfpage={300}></Book>
            <Book name="처음 만난 ANS" numOfpage={400}></Book>
            <Book name="처음 만난 리액트" numOfpage={500}></Book>
        </div>
    )
}

export default Library