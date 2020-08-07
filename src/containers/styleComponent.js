import styled from "styled-components";
export const Triangleup = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 17.3px 10px;
  border-color: transparent transparent #cfcfcf transparent;
  cursor: pointer;

`;
export const BackButton = styled.div`
  cursor: pointer;  
  margin-left: 1%;
  color: #ff6600;
  outline: none;
  margin-bottom: 1%;
  float:${(props) => (props.float ? props.float : "left")};
  visibility:  ${(props) => (props.visibility ? props.visibility : "visible")};
 
`;
