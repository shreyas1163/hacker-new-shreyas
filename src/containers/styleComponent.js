import styled from "styled-components";
export const Triangleup = styled.div`
width: 0;
height: 0;
border-style: solid;
border-width: 0 10px 17.3px 10px;
border-color: transparent transparent #cfcfcf transparent;
`;
export const BackButton = styled.button`
height: 22%;
position: relative;
/* width: 82px; */
border-radius: 50px;
margin-left: 0%;
border: 1px solid #FFFFFF;
/* box-shadow: 0px 1px 4px 0px rgba(168,168,168,1); */
font-family: arial,sans-serif;
color: white;
outline: none;
background-color: orange;
float: left;
visibility: visible;
float:${(props) => (props.float ? props.float : "left")};
visibility:  ${(props) => (props.visibility ? props.visibility : "visible")};
&:hover {
  background: grey;
  color: white;
}
&:active {
  background: grey;
  color: white;
}
`;
