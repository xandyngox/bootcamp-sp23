import React from "react";
import { Button } from "@chakra-ui/react";

export default function MyCard() {
  return (
    <Button
      textAlign="left"
      width="150px"
      height="150px"
      backgroundColor="notiom.blue"
      borderRadius="10px"
      backgroundImage="/CardButton.svg"
    />
  );
}
