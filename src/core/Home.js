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
import { getNannies } from './helper/coreapicalls';
import { isAuthenticated } from '../auth/helper';


const Home = () => {
  const [nannies, setNannies] = useState([]);
  const [error, setError] = useState(false);

  const loadNannies = () => {
    getNannies().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setNannies(data);
      }
    });
  };
  useEffect(() => {
    loadNannies();
  }, []);

  return (
    <ChakraProvider>
      <Base title="Home Page" description="Welcome to our Home Page!">
        <Heading ml={8}>Nannies Near You:</Heading>
        <Grid templateColumns={{ md: 'repeat(4, 1fr)' }} py={3}>
          {
            nannies.map((nanny, index) => {
            if(isAuthenticated().user.location === nanny.location){
            return (
              <GridItem key={index} w="90%" align="center" ml="auto" mr="auto">
                <ProductCard product={nanny} />
              </GridItem>
            
            );}
          })}
        </Grid>
      </Base>
    </ChakraProvider>
  );
};

export default Home;
