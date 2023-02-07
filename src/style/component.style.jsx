
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
  color: white;
`}
`;


