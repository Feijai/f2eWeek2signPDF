import styled from "styled-components";

export const HomeCss = styled.div`
    padding:38px 16px 0px 20px;

    button{
        border:0;
        background:none;
        padding:0;
    }
    .left{
        display:flex;
        margin-left:43px;
        column-gap:36px;
    }
    .leftBtn{
        width:96px;
        height:44px;
        font-weight:bold;
        font-size:24px;
        line-height:150%;
        color:var(--dark-gray);
    }
    .new{
        background-color:var(--purple);
        width:168px;
        height:41px;
        margin-right:1.5rem;
        border-radius:8px;
    }
    .icon{
        margin-right:1rem;
    }
`