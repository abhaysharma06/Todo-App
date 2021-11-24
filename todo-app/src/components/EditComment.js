import { Heading} from "@chakra-ui/layout";
import { body } from "express-validator";
import React, { useState } from "react";
import { Button, HStack, Input, useToast } from '@chakra-ui/react';



function EditComment({todos}){
  console.log(todos);
//  const state={data:todos}

    return (
      <form >
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='add your task'
          value={todos}
        />
        <Button colorScheme='pink' px='8' type='submit'>
          Save Edit
        </Button>
      </HStack>
    </form>
    )


  
}
export default EditComment;