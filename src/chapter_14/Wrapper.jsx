import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em;
    background: red;
 `   ;
const Tittle = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`   ;

function MaingPage(props) {
    return (
        <Wrapper>
            <Tittle>
                안녕. 리액트!
            </Tittle>
        </Wrapper>
    );
}

export default MaingPage;