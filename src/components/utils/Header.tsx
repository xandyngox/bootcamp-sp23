import React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <Box textAlign="center" backgroundColor="gray.100" p={4}>
      <Heading as="h1" size="xl" mb={2}>
        {title}
      </Heading>
      <Heading as="h2" size="md">
        {subtitle}
      </Heading>
    </Box>
  );
};

export default Header;
