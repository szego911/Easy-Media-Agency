// Filename - components/Footer.js

import React from "react";
import { navLinks } from '../constants';
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { adatvedelem } from "../assets";
import { motion } from "framer-motion";
import { logo, menu, close } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  return (
    <Box>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[22px] text-center mb-[40px] text-[20px] text-secondary uppercase tracking-wider">
          Easy Media Agency
        </p>
      </motion.div>

      <FooterContainer>
        <Row>
          <Column>
            <Heading>Az oldalról</Heading>
            <FooterLink href="#about">Rólunk</FooterLink>
            <FooterLink href="#work">Projektek</FooterLink>
            <FooterLink href="#contact">Küldj Emalit!</FooterLink>
          </Column>
          <Column>
            <Heading>Szolgálatások</Heading>
            <FooterLink href="#work">Weboldal készítés</FooterLink>
            <FooterLink href="#about">Shopify webshop felállítás</FooterLink>
            <FooterLink href="#about">Grafika tervezés</FooterLink>
            
          </Column>
          <Column>
            <Heading>Kapcsolat</Heading>
            <FooterLink href="adatvedelem.pdf">Impresszum és adatvédelem</FooterLink>
            <FooterLink href="tel:+36303167102">+36 30 31 67 102</FooterLink>
            <FooterLink href="mailto:info@easymediaagency.com">info@easymediaagency.com</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/profile.php?id=100090280098901">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/easymedia.agency/">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
