import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { addItemToCart, removeProductFromCart } from './helper/cartHelper';
import Imagecalls from './helper/Imagecalls';

const ProductCard = ({
  product,
  showAddToCart = true,
  showRemoveFromCart = false,
  setReload = (value) => value,
  reload,
}) => {
  const [redirect, setRedirect] = useState(false);

  const [count, setCount] = useState();
  const addToCart = () => {
    addItemToCart(product, () => {
      setCount(product.count);
      setRedirect(true);
    });
  };
  const getRedirected = () => {
    if (redirect) {
      return <Navigate to="/cart" />;
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card maxW="sm" height="100%">
      {getRedirected()}
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text>
          EMAIL :- {product.email}
           </Text>
          

          <Text color="blue.600" fontSize="2xl">
            {product.phone}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <Button mt={2} ml="auto" mr="auto"  width="fit-content" onClick={onOpen}>Click for more details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product.name} more details:-</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{product.experience}</ModalBody>
          <ModalBody>

          <Input
                    type={"text"}
                    placeholder="Message Nanny"
                  />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" type="submit">Send Message</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <CardFooter>
        {showAddToCart && (
          <Button colorScheme="teal" w="100%" onClick={addToCart}>
            Book Now
          </Button>
        )}
        {showRemoveFromCart && (
          <Button
            colorScheme="red"
            w="100%"
            onClick={() => {
              removeProductFromCart(product._id);
              setReload(!reload);
            }}
          >
            Remove From Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
