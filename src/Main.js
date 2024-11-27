import { Box } from "@chakra-ui/react";

const Main = () => {
  return (
    <div>
      <Box
        w="300px"
        h="300px"
        bg="salmon"
        fontSize={"30px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"white"}
      >
        박스에요
      </Box>
    </div>
  );
};

export default Main;
