import React, { useState, useEffect } from "react";
import { Button, HStack, Input } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function EditComment({ editComment, addTodo }) {
  const [editComments, setContent] = useState(editComment.todo);

  function handleSubmit(e) {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      body: editComments,
    };

    addTodo(todo);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="add your task"
          value={editComments}
          onChange={(val) => {
            setContent(val.target.value);
          }}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Save Edit
        </Button>
      </HStack>
    </form>
  );
}
export default EditComment;
