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

      <Flex>
        <Box>
          <Icon src="../../public/images/Vector.svg" />
        </Box>
        <Spacer />
        <Box>
          <ButtonLink href="/test" variant="blue">
            Create
          </ButtonLink>
        </Box>
      </Flex>

      <Stack p={4}>
        {/* <Box>
          <Button variant="blue" onClick={() => setChild({})}>
            {(child as ReactNode) ?? "Test error handling"}
          </Button>
        </Box> */}

        <Center>
          <VStack spacing="43px">
            <Heading fontSize="60px">Create. Explore.</Heading>
            <Text fontSize="52px">
              The document editing software you’ve been waiting for
            </Text>
          </VStack>
        </Center>

        {/* <Box>
          <NextLink href="/random-route" color="TODO.blue">
            Test 404 Page
          </NextLink>
        </Box> */}
        {/* centering the entire cards div */}
        <Flex w="100%" justify="center" direction="row">
          {/* flexbox holding the columns of cards */}
          <Flex w="1410px" h="350px" justify="space-between" direction="column">
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
      </Stack>
    </>
  );
}
