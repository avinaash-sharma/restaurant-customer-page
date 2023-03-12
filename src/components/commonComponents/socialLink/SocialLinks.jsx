import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTwitter, AiFillInstagram, AiFillFacebook, AiFillMail } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div>
      <div className="socialLinksContainer">
        <AiOutlineTwitter color="#B0883C" size="35" />
        <AiFillInstagram  color="#B0883C" size="35"/>
        <AiFillFacebook  color="#B0883C" size="35"/>
        <AiFillMail  color="#B0883C" size="35"/>
      </div>
    </div>
  );
};

export default SocialLinks;
