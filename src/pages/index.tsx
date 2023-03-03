import { Box, Stack, Heading } from "@chakra-ui/layout";
import {
  Button,
  Center,
  Flex,
  Spacer,
  Text,
  VStack,
  Icon,
  IconProps,
  createIcon,
  Image,
  HStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState } from "react";

import ButtonLink from "../components/utils/ButtonLink";
import NextLink from "../components/utils/NextLink";
import Card from "../components/utils/Card";

export default function Home() {
  const [child, setChild] = useState<object | null>(null);

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

        {/* <Box>
            <Button variant="blue" onClick={() => setChild({})}>
              {(child as ReactNode) ?? "Test error handling"}
            </Button>
          </Box> */}

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
        {/* <Box>
          <NextLink href="/random-route" color="TODO.blue">
            Test 404 Page
          </NextLink>
        </Box> */}

        <Box height="50vh" backgroundColor="white">
          {/* centering the entire cards div */}
          <Flex w="100%" justify="center" direction="row">
            {/* flexbox holding the columns of cards */}
            <Flex
              w="1410px"
              h="350px"
              justify="space-between"
              direction="column"
              m={10}
            >
              <Flex w="100%" justify="space-between">
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
              </Flex>
              <Flex w="100%" justify="space-between">
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
                <Card description="Lorem ipsum dolor sit amet, consectetur" />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
