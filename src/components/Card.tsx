import { Box, Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <Center position="relative" top="20">
      <Box
        bgColor="#FFFFFF"
        borderRadius="5"
        p="4"
        width="50vw"
        maxWidth="500px"
      >
        {children}
      </Box>
    </Center>
  );
};
