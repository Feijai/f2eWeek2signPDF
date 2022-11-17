import styled from "styled-components";

export const PDFViewerCss = styled.div`
margin-top:21px;
  /* .viewerContainer {
    overflow: auto;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  } */

  .page{
    width: 100%!important;;
    height:142px!important;
    margin-bottom:44px;
  }
  .active {
    border: 1px solid #f1c343;
  }

  .canvasWrapper,canvas{
    width:100%!important;
    height:142px!important;
  }
`;
