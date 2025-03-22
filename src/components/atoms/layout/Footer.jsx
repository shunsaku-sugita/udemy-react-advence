import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = () => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

const SFooter = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
const SLink = styled(Link)`
  margin: 0 8px;
`;
