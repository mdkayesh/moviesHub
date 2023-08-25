import React from "react";
import styles from "../../../utils/styles";
import { Facebook, Instagram, Linkedin, Twitter } from "../../../utils/Icons";

const Footer = () => {
  const footerLinks = [
    {
      title: "About",
    },
    {
      title: "Contact Us",
    },
    {
      title: "Support Forums",
    },
    {
      title: "Terms of Use",
    },
    {
      title: "Privacy Policy",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook />,
    },
    {
      icon: <Instagram />,
    },
    {
      icon: <Twitter />,
    },
    {
      icon: <Linkedin />,
    },
  ];

  return (
    <footer className={`${styles.SectionPaddingY}`}>
      <div className={`${styles.paddingX} bg-[#06121F] py-20`}>
        <div className="container">
          <ul className="flex gap-3 items-center justify-center flex-wrap">
            {footerLinks.map((link) => (
              <li
                className="cursor-pointer hover:text-white_100 transition-colors"
                key={link.title}
              >
                {link.title}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-sm text-gray_100">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            laboriosam doloribus quae ipsa placeat! Nam enim, eos amet ratione
            doloribus autem consequatur aliquam illo atque dolorum illum eius
            deserunt. Hic, dolore maiores ut explicabo iste cupiditate excepturi
            placeat, rem autem laudantium repellat porro. Dolorem deserunt
            accusantium magnam laborum quia tenetur?
          </p>
          <ul className="flex gap-4 items-center justify-center mt-5 flex-wrap">
            {socialLinks.map((link, index) => (
              <li
                className="cursor-pointer hover:text-white_100 transition-colors p-3 text-lg rounded-full bg-bg_secondary"
                key={index}
              >
                {link.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
