import { Box, Text } from "@chakra-ui/react";

interface CardInfoProsp {
  title: string;
  text: string;
}

export const CardInfo = ({ text, title }: CardInfoProsp) => {
  return (
    <Box bgColor="#fff" minHeight="120px" p={8} borderRadius={12}>
      <Text fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="xl">{text}</Text>
    </Box>
  );
};
