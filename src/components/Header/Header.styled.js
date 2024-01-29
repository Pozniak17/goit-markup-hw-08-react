import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PageHeader = styled.header`
  border-bottom: 1px solid #ececec;
`;

export const PageHeaderContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const SiteNavList = styled.ul`
  position: relative;
  display: flex;

  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SiteNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const ContactItem = styled.li`
  margin-left: 50px;
`;

export const LogoLabel = styled.span`
  color: var(--accent);
`;

export const StyledLink = styled(NavLink)`
  display: block;
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 26px;
  text-decoration: none;
  line-height: 1.19;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  padding-top: 25px;
  padding-bottom: 24px;
  margin-right: 93px;

  color: #000000;

  &:hover,
  &:focus {
    color: darkorchid;
  }
`;

export const StudioLink = styled(NavLink)`
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  position: relative;
  display: block;
  padding-top: 32px;
  padding-bottom: 32px;

  color: var(--title-text-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;

  &:hover,
  &:focus {
    color: var(--accent);
  }

  &.active {
    color: var(--accent);

    &::after {
      position: absolute;
      display: block;
      content: '';
      height: 4px;
      min-width: 100%;
      border-radius: 2px;
      background-color: var(--accent);
      bottom: -1px;
    }
  }
`;
