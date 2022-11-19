import styled from "styled-components";

export const MenuCss = styled.div`
    width:282px;
    background-color:var(--mid-gray);

    padding:32px 0px 92px 15px;
    .topBtn{
        row-gap:1.5rem;
    }
    .menuBtn{
        border:0;
        margin-left:1.5rem;
        heihgt:48px;
        width:188px;
    }
    .title{
        margin-left:1.5rem;
        font-size: 18px;
        font-weight:500;
        line-height: 100%;
        align-self: center;
    }
    .bottomBtn{
        margin-top:54px;
        color:var(--purple)
    }
    .statesGreen{
        margin-left:1rem;
    }
`

export const ProCss = styled.div`
margin-left:9px;
border-radius:8px;
width:230px;
height:135px;
background: linear-gradient(#4FCAA0, #6E7EE5);
.logo{
    width:100px;
    height:24px;
    top:16px;
    left:17px;
}
.pro{
    top:18px;
    left:128px;
}
.ba{
    left:-2px;
    top:40px;
}
.fifty{
    top:46px;
    left:144px;
}
.sale{
    top:25px;
    left:191px;
}
.upgrade{
    top:100px;
    left:137px;
}

`

export const SignMenuCss = styled.div`
    .icons{
        padding:44px 22px;
        row-gap:2.5rem;
        background-color:var(--mid-gray);
    }
    .icon{
        width:32px;
        height:32px;
    }
    .func{
        background-color:var(--lite-gray);
        padding:23px 39px;
        width:202px;
    }

    .text{
        width:124px;
        font-size:12px;
        color: var(--dark-gray);
        margin-bottom:21px;
    }
    .files{
        row-gap:24px;
        margin-top:21px;
    }
    .file{
        width:124px;
        height:142px;
        background-color:white;
    }
    .fileText{
        width:124px;
        font-size:12px;
        margin-top:4px;
        color:var(--lite-black);
    }

`