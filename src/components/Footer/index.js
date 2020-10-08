import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrapper,
  FooterLogo,
  FooterMedia,
  FooterMediaIcons,
  FooterMediaWrapper,
  FooterMediaIconLink,
  WebsiteRights,
} from "./FooterElements";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us </FooterLinkTitle>
              <FooterLink to="/signin"> How it Works</FooterLink>
              <FooterLink to="/signin"> Careers</FooterLink>
              <FooterLink to="/signin"> Investors</FooterLink>
              <FooterLink to="/signin"> Terms and Services</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> About us </FooterLinkTitle>
              <FooterLink to="/signin"> How it Works</FooterLink>
              <FooterLink to="/signin"> Careers</FooterLink>
              <FooterLink to="/signin"> Investors</FooterLink>
              <FooterLink to="/signin"> Terms and Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us </FooterLinkTitle>
              <FooterLink to="/signin"> How it Works</FooterLink>
              <FooterLink to="/signin"> Careers</FooterLink>
              <FooterLink to="/signin"> Investors</FooterLink>
              <FooterLink to="/signin"> Terms and Services</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> About us </FooterLinkTitle>
              <FooterLink to="/signin"> How it Works</FooterLink>
              <FooterLink to="/signin"> Careers</FooterLink>
              <FooterLink to="/signin"> Investors</FooterLink>
              <FooterLink to="/signin"> Terms and Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <FooterMedia>
          <FooterMediaWrapper>
            <FooterLogo onClick={toggleHome}>allSTEAM</FooterLogo>
            <WebsiteRights>
              allSTEAM © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <FooterMediaIcons>
              <FooterMediaIconLink
                href="/"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </FooterMediaIconLink>

              <FooterMediaIconLink
                href="/"
                target="_blank"
                arial-label="LinkedIn"
              >
                <FaLinkedinIn />
              </FooterMediaIconLink>

              <FooterMediaIconLink
                href="/"
                target="_blank"
                arial-label="Github"
              >
                <FaGithub />
              </FooterMediaIconLink>

              <FooterMediaIconLink
                href="/"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </FooterMediaIconLink>

              <FooterMediaIconLink
                href="/"
                target="_blank"
                arial-label="Youtbe"
              >
                <FaYoutube />
              </FooterMediaIconLink>

              <FooterMediaIconLink
                href="/"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </FooterMediaIconLink>
            </FooterMediaIcons>
          </FooterMediaWrapper>
        </FooterMedia>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
