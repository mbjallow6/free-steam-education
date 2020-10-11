import styled from "styled-components";
import { Link } from "react-router-dom";


export const DropdownMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DropdownItem = styled.li `
  height: 80px;
`;

export const DropdownLink = styled(Link)
`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;