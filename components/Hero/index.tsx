import React from 'react';

import Pill from '../Pill';
import { Flex, Box, Container } from '../Layout';
import { HeroText, Lede } from '../Typography';
import { Link } from '../Link';

const Hero = () => {
  return (
    <Container>
      <Flex
        width={[1, 1, 0.5]}
        mt={5}
        mb={[5, 6]}
        alignItems="center"
        flexDirection="column"
        mx="auto"
      >
        <Box mb={2}>
          <Pill>Apple Notes eat your ❤️ out</Pill>
        </Box>
        <HeroText>OperaMea</HeroText>
        <Box my={2}>
          <Lede>
            A small todos app built with <Link href="https://nextjs.org/">Next.js</Link> &amp;{' '}
            <Link href="https://www.typescriptlang.org/">Typescript</Link> for NovaFori
          </Lede>
        </Box>
      </Flex>
    </Container>
  );
};

export default Hero;
