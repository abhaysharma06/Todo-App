import { VStack } from "@chakra-ui/layout";
import React from "react";
import { Heading } from "@chakra-ui/layout";

export default function Head() {
  return (
    <VStack>
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.300, pink.300)"
        bgClip="text"
      >
        Todo Application
      </Heading>
    </VStack>
  );
}
