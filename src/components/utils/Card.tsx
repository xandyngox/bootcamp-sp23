import React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface CardProps {
  description: string;
}

export default function MyCard({ description }: CardProps) {
  return (
    <Box
      textAlign="left"
      width="150px"
      height="150px"
      backgroundColor="notiom.lgrey"
      border="2px solid"
      borderColor="notiom.mgrey"
      borderRadius="10px"
      padding="24px 13px"
    >
      <Heading color="notiom.dgrey" as="h1" size="l" mb={2}>
        {description}
      </Heading>
    </Box>
  );
}
