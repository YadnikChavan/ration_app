import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../Colors";
import Rating from "./Rating";
import Message from "./Notifications/Message";
import Buttone from "./Buttone";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>

      <Message
        color={Colors.main}
        bg={Colors.subGreen}
        size={10}
        bold
        children={"NO REVIEW"}
      />

      <Box p={3} bg={Colors.subGreen} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text fontSize={12} my={3}>
          Jan 12 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Cillum eu sint exercitation duis amet ut nulla do aute eiusmod."
          }
        />
      </Box>
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>

        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={2} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={20}
              w="full"
              placeholder="This product is goood.."
              borderWidth={0}
              bg={Colors.subGreen}
              py={2}
              _focus={{ bg: Colors.subGreen }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttone>
          <Message
            color={Colors.white}
            bg={Colors.black}
            children={"Please 'Login' to write a review"}
          />
        </VStack>
      </Box>
    </Box>
  );
}
