import React, { useEffect, useState } from 'react';
import Base from './Base';
import {
  ChakraProvider,
  Button,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { getProducts } from './helper/coreapicalls';

const NannyHome = () => {
  const [error, setError] = useState(false);

  return (
    <ChakraProvider>
      <Base title="NannyHome Page" description="Welcome to our NannyHome Page!">
        <Heading ml={8}>All Products:</Heading>
        <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} py={3}>
          <GridItem align="center" class="row-container">
            <iframe
              src="https://www.youtube.com/embed/H4Fh7R8HvnI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen='allowFullScreen'
              class="second-row"
            ></iframe>
          </GridItem>
          <GridItem align="center" class="row-container">
            <iframe
              src="https://www.youtube.com/embed/3BOhq5ldLzE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen='allowFullScreen'
              class="second-row"
            ></iframe>
          </GridItem>
          <GridItem align="center" class="row-container">
            <iframe
              src="https://www.youtube.com/embed/fo9FxPp1hcU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen='allowFullScreen'
              class="second-row"
            ></iframe>
          </GridItem>
        </Grid>
      </Base>
    </ChakraProvider>
  );
};

export default NannyHome;

