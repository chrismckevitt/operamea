import React, { useState, useEffect } from 'react';

import { ITodo } from '../../types/api';
import useApi from '../../hooks/useApi';
import { Flex, Container, Box } from '../Layout';
import Pill from '../Pill';
import Todo from './Todo';

const Todos = () => {
  const [showComplete, setShowComplete] = useState(false);
  const { todos, fetchTodos } = useApi();
  const toggleCompletedTodos = () => setShowComplete((prev) => !prev);

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  return (
    <Container>
      <Box mb={[4, 5, 6]}>
        <Flex mx="auto" mb={4} justifyContent="center">
          <Box mr={0}>
            <Pill
              size="small"
              type={showComplete ? 'ghost' : 'purple'}
              onClick={toggleCompletedTodos}
              as="button"
            >
              Pending
            </Pill>
          </Box>
          <Pill
            size="large"
            type={showComplete ? 'purple' : 'ghost'}
            onClick={toggleCompletedTodos}
            as="button"
          >
            Completed
          </Pill>
        </Flex>
        <Box width={[1, 0.8]} mx="auto">
          {todos
            .filter((todo: ITodo) => todo.isComplete === showComplete)
            .map((todo: ITodo) => {
              return (
                <div key={todo.id} id={`todo-${todo.id}`}>
                  <Todo
                    id={todo.id}
                    subject={todo.subject}
                    category={todo.category}
                    priority={todo.priority}
                    isComplete={todo.isComplete}
                  />
                </div>
              );
            })}
        </Box>
      </Box>
    </Container>
  );
};

export default Todos;
