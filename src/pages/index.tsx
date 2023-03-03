import { Box, Heading, Text } from "@chakra-ui/layout";
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
import CardButton from "../components/utils/CardButton";

export default function Home() {
  const [state, setState] = useState({
    cards: [
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
      { description: "Lorem ipsum dolor sit amet, consectetur" },
    ],
  });

  const renderedCards = state.cards.map((item) => (
    <Card description={item.description} />
  ));

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
            <Heading fontWeight="600" fontSize="60px" color="notiom.dgrey">
              Create. Explore.
            </Heading>
            <Heading fontWeight="500" fontSize="40px" color="notiom.dgrey">
              The document editing software you’ve been waiting for
            </Heading>
          </VStack>
        </Center>

        <Box minHeight="50vh" backgroundColor="white">
          {/* centering cards grid */}
          <Center w="100%">
            {/* grid of cards */}
            <SimpleGrid columns={6} spacing={10} padding="50px">
              <CardButton />
              {renderedCards}
            </SimpleGrid>
          </Center>
        </Box>
      </Box>
    </>
  );
}
