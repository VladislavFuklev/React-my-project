import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export function FooterIcons() { 
  return (
    <>
      <div className="footer-descr">
        <a href="#/"><FaInstagramSquare /></a>
        <a href="#/"><FaTelegram /></a>
        <a href="#/"> <FaTwitterSquare/></a>
        <a href="#/"> <FaFacebookSquare/></a>
      </div>
    </>
  );
}
