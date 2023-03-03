import React from "react";
import { Flex, IconButton, Box, Heading } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function MyCard() {
  return (
    <Box
      textAlign="left"
      width="150px"
      height="150px"
      backgroundColor="notiom.blue"
      borderRadius="10px"
      backgroundImage="/CardButton.svg"
    />
  );
}
