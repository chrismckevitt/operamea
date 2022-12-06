import React from 'react';

import { ITodo } from '../../../types/api';
import useApi from '../../../hooks/useApi';
import { Flex, Box } from '../../Layout';
import Button from '../../Button';
import Pill from '../../Pill';

const Todo = ({ id, subject, category, priority, isComplete }: ITodo) => {
  const { deleteTodo, toggleTodoComplete } = useApi();
  return (
    <Flex
      justifyContent="space-betwen"
      alignItems="center"
      mb={[3, 2]}
      flexDirection={['column', 'row']}
    >
      <Flex
        alignItems="center"
        py={0}
        backgroundColor="#fff"
        px={3}
        style={{ borderRadius: '15px' }}
        flexDirection={['column', 'row']}
        mr={['0px', 2]}
        width={[1, 0.7]}
        mb={[1, '0px']}
      >
        <Box width={[1, 0.6]} mb={[1, '0px']} textAlign="left">
          <small>{subject}</small>
        </Box>
        <Flex
          alignItems="center"
          ml={['unset', 'auto']}
          justifyContent={['space-between', 'unset']}
          width={[1, 'auto']}
        >
          {' '}
          <Box mr={['0px', 1]}>
            <Pill type="ghost">{category}</Pill>
          </Box>
          <Box>
            <Pill type={priority}>{priority}</Pill>
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <Box mr={1}>
          <Button
            size="small"
            type="button"
            styleType="secondary"
            onClick={() => deleteTodo(id)}
            id={`delete-${id}`}
          >
            Delete
          </Button>
        </Box>
        <Button
          size="small"
          type="button"
          styleType="primary"
          onClick={() => toggleTodoComplete(id)}
          id={`toggle-status-${id}`}
        >
          {isComplete ? 'Not complete' : 'Complete'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Todo;
