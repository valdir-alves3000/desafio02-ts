import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      justify="center"
      padding={6}
      color="white"
      bg="blue.300"
    >
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          DIO Bank
        </Heading>
    </Flex>
  );
};
