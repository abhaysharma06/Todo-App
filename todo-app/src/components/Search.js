import React from "react";
import { HStack, Input, IconButton } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import { body } from "express-validator";

function Search({ filterData }) {
  const [searchData, setSearchData] = useState("");
  const searchElement = (event) => {
    setSearchData(event.target.value);
  };

  useEffect(() => {
    filterData(searchData);
  }, [searchData]);

  return (
    <form>
      <HStack mt="8">
        <Input variant="filled" placeholder="Search" onChange={searchElement} />
        <IconButton icon={<MdSearch />} isRound="true" />
      </HStack>
    </form>
  );
}

export default Search;
