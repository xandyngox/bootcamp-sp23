import { Box, Heading } from "@chakra-ui/layout";
import {
  Center,
  Flex,
  Spacer,
  Button,
  VStack,
  Image,
  HStack,
  SimpleGrid,
  ModalOverlay,
  Modal,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

import Card from "../components/utils/Card";

export default function Home() {
  const [text, setText] = useState("");
  const [cards, setCards] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addCard = () => {
    const newId = cards.length;
    const newDescription = text.split(" ").slice(-5).join(" ");
    const newCard = { id: newId, description: newDescription };
    setCards([...cards, newCard]);
  };

  const removeCard = (deleteId: number) => {
    const updatedCards = [...cards];
    for (let i = 0; i < updatedCards.length; i++) {
      if (updatedCards[i].id === deleteId) {
        updatedCards.splice(i, 1);
        break;
      }
    }
    setCards(updatedCards);
  };

  const renderedCards = cards.map((item) => (
    <Card
      deleteFunction={removeCard}
      id={item.id}
      description={item.description}
    />
  ));

  const handlenewpage = () => {
    // Call all the functions you want to trigger
    addCard();
    onClose();
  };

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
            <Button onClick={onOpen} variant="blue" mt={5} mr={5}>
              Create
            </Button>
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
              <Button
                onClick={onOpen}
                textAlign="left"
                width="150px"
                height="150px"
                backgroundColor="notiom.blue"
                borderRadius="10px"
                backgroundImage="/CardButton.svg"
              />
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Create new card</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Input
                      placeholder="Type your new document here!"
                      size="sm"
                      onChange={(e) => setText(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      backgroundColor="notiom.blue"
                      color="white"
                      mr={3}
                      onClick={handlenewpage}
                    >
                      Create
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              {renderedCards}
            </SimpleGrid>
          </Center>
        </Box>
      </Box>
    </>
  );
}
