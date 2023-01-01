import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Imagecalls from './helper/Imagecalls';
const ProductCard = ({product}) => {
  return (
    <Card maxW="sm" height="100%">
      <CardBody>
        <Imagecalls product={product} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text>
            {product.description}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
