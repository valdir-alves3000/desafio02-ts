import { Flex } from "@chakra-ui/react";

export const Footer  = () => {
  return(
    <Flex
      justify="center"
      padding={6}
      color="white"
      bg="blue.300"
    >
          <span>
            Copyright ©
            <a href="https://github.com/valdir-alves3000">Valdir Alves</a>{" "}
            {new Date().getFullYear()}
          </span>
        </Flex>
  )
}
