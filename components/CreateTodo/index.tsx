import React from 'react';
import { useForm } from 'react-hook-form';

import { IPartialTodo } from '../../types/api';
import useApi from '../../hooks/useApi';
import { TextArea, Select } from '../Form';
import { Box, Flex } from '../Layout';
import Button from '../Button';
import { CreatePanel } from './style';

const CreateTodo = () => {
  const { register, handleSubmit, reset } = useForm<IPartialTodo>();
  const { addTodo } = useApi();
  const onSubmit = handleSubmit((newTodo) => addTodo(newTodo, reset));
  return (
    <Box width={1} py={5} textAlign="center" px={1}>
      <Box mb={2}>
        <h1>Create a new todo</h1>
      </Box>
      <Box width={[1, 0.8, 0.6, 0.4]} mx="auto">
        <CreatePanel>
          <form onSubmit={onSubmit}>
            <Flex flexDirection="column">
              <Box>
                <Box mb={1} textAlign="start">
                  <small>Description</small>
                </Box>
                <TextArea {...register('subject')} placeholder="Todo" />
              </Box>
              <Flex justifyContent="space-between">
                <Box width={0.48}>
                  <Box mb={1} textAlign="start">
                    <small>Priority</small>
                  </Box>
                  <Select {...register('priority', { required: true })}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Select>
                </Box>
                <Box width={0.48}>
                  <Box mb={1} textAlign="start">
                    <small>Category</small>
                  </Box>
                  <Select {...register('category')}>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                  </Select>
                </Box>
              </Flex>
              <Box mt={2}>
                <Button size="normal" type="submit" styleType="primary">
                  Create todo
                </Button>
              </Box>
            </Flex>
          </form>
        </CreatePanel>
      </Box>
    </Box>
  );
};

export default CreateTodo;
