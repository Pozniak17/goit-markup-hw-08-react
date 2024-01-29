import { Routes, Route, NavLink } from 'react-router-dom';
import {
  ContactItem,
  ContactList,
  LogoLabel,
  NavWrapper,
  PageHeader,
  PageHeaderContainer,
  SiteNavItem,
  SiteNavList,
  StudioLink,
  StyledLink,
} from './Header.styled';

export const Header = () => {
  return (
    <PageHeader>
      <PageHeaderContainer>
        {/* секція навігації✅ */}
        <NavWrapper>
          <StyledLink to="/">
            <LogoLabel>Web</LogoLabel>Studio
          </StyledLink>

          <SiteNavList>
            <SiteNavItem>
              <StudioLink to="/">Студія</StudioLink>
            </SiteNavItem>

            <SiteNavItem>
              <StudioLink to="/portfolio">Портфоліо</StudioLink>
            </SiteNavItem>

            <SiteNavItem>
              <StudioLink to="/contacts">Контакти</StudioLink>
            </SiteNavItem>
          </SiteNavList>
        </NavWrapper>

        {/* секція конатктів */}
        <ContactList>
          <ContactItem>
            {/* <a href="mailto:info@devstudio.com" class="contact__link">
              <svg class="contact__icon" width="16" height="12px">
                <use href="./images/sprite.svg#icon-mail"></use>
              </svg>
              info@devstudio.com
            </a> */}
          </ContactItem>

          <ContactItem>
            {/* <a href="tel:+380961111111" class="contact__link">
              <svg class="contact__icon" width="10" height="16">
                <use href="./images/sprite.svg#icon-telephone"></use>
              </svg>
              +38 096 111 11 11
            </a> */}
          </ContactItem>
        </ContactList>

        <button class="menu-open" type="button">
          <svg class="icon-menu" width="40" height="40">
            <use href="./images/sprite.svg#icon-menu"></use>
          </svg>
        </button>
      </PageHeaderContainer>

      <div class="mob-menu is-hidden">
        <div class="container">
          <button class="menu-close" type="button">
            <svg class="icon-menu-cross" width="40" height="40">
              <use href="./images/sprite.svg#icon-cross"></use>
            </svg>
          </button>
          <ul class="mob-menu__list list">
            <li class="mob-menu__item">
              <a
                class="mob-menu__link mob-menu__link--current"
                href="./index.html"
              >
                Студия
              </a>
            </li>
            <li class="mob-menu__item">
              <a class="mob-menu__link" href="./portfolio.html">
                Портфолио
              </a>
            </li>
            <li class="mob-menu__item">
              <a class="mob-menu__link" href="#">
                Контакты
              </a>
            </li>
          </ul>

          <div class="mob-menu-bottom">
            <ul class="mob-contact__list list">
              <li class="mob-contact__item">
                <a class="mob-contact__link mob-contact-tel__link" href="">
                  +38 096 111 11 11
                </a>
              </li>
              <li class="mob-contact__item">
                <a class="mob-contact__link" href="">
                  info@devstudio.com
                </a>
              </li>
            </ul>

            <ul class="mob-social__list list">
              <li class="mob-social__item">
                <a class="mob-social__link" href="">
                  Instagram
                </a>
              </li>
              <li class="mob-social__item">
                <a class="mob-social__link" href="">
                  Twitter
                </a>
              </li>
              <li class="mob-social__item">
                <a class="mob-social__link" href="">
                  Facebook
                </a>
              </li>
              <li class="mob-social__item">
                <a class="mob-social__link" href="">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageHeader>
  );
};
