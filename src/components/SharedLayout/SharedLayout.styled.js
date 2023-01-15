import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 15px 16px -14px #a4ada1;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 30px;

  margin-left: 15px;

  &.active {
    color: red;
  }
`;
