import { Box, Heading } from "@chakra-ui/layout";
import {
  Center,
  Flex,
  Spacer,
  VStack,
  Image,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState } from "react";

import ButtonLink from "../components/utils/ButtonLink";
import NextLink from "../components/utils/NextLink";
import Card from "../components/utils/Card";

export default function Home() {
  const [data, setData] = useState({
    cards: [
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
      <Card description="Lorem ipsum dolor sit amet, consectetur" />,
    ],
  });

  return (
    <>
      <Head>
        <title>Create. Explore.</title>
      </Head>

      <Box height="100vh" backgroundColor="notiom.lgrey">
        <Flex>
          <Box mt={5} ml={5}>
            <HStack>
              <Image boxSize="40px" src="/Vector.jpg" alt="Vector.jpg" />

              <Heading fontSize="30px" color="notiom.dgrey">
                Notiom
              </Heading>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <ButtonLink href="/test" variant="blue" mt={5} mr={5}>
              Create
            </ButtonLink>
          </Box>
        </Flex>
        <Center>
          <VStack spacing="43px" my={20}>
            <Heading fontSize="60px" color="notiom.dgrey">
              Create. Explore.
            </Heading>
            <Heading fontSize="40px" color="notiom.dgrey">
              The document editing software you’ve been waiting for
            </Heading>
          </VStack>
        </Center>

        <Box minHeight="50vh" backgroundColor="white">
          {/* centering cards grid */}
          <Flex w="100%" justify="center" direction="row">
            {/* grid of cards */}
            <SimpleGrid columns={6} spacing={10} padding="50px">
              {data.cards}
            </SimpleGrid>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
