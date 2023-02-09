
import styled, { css }  from "styled-components";

export const Button = styled.button`
background: #f5f5f5;
border-radius: 3px;
border: none;
color: black;
margin: 0.5em 1em;
padding: 0.25em 1em;
cursor: pointer;

${props => props.primary && css`
  background: #055B5C;
  color: white;`
}
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  background: rgba(0,0,0,.5);
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ContainerModal = styled.div`
  padding: 10px 10px 10px 10px;
  width: 500px;
  height: 150px;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  display:flex;
  flex-direction: column;
  justify-content:space-between;

`;
