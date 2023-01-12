import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';

const UserOrNanny = () => {
  return (
    <Base
      title="User Or Nanny"
      description="Please select how do you want to use our site."
    >
      <Flex direction="column" align="center">
        <Button width={{ base: '80%', md: '30%' }} mb={4} mt={32}>
          <Link to="/user/signup" >Searching for nanny!</Link>
        </Button>

        <Button width={{ base: '80%', md: '30%' }} mb={32} colorScheme="teal">
          <Link to="/nanny/signup">I am a Nanny!</Link>
        </Button>
      </Flex>
    </Base>
  );
};

export default UserOrNanny;
