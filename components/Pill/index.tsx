import React from 'react';

import { Flex } from '../Layout';
import { IPillProps } from './types';
import { PillContainer } from './style';

const Pill = ({ children, type = 'lime', size = 'small', onClick, as = 'pill' }: IPillProps) => (
  <Flex>
    <PillContainer type={type} size={size} onClick={onClick} as={as}>
      <p>{children}</p>
    </PillContainer>
  </Flex>
);

export default Pill;
