import type { NextApiRequest, NextApiResponse } from 'next';

import { todosData } from '../../../data/todos';
import { ITodos } from '../../../types/api';
import { GET, POST } from '../../../constants/methods';

const handler = (req: NextApiRequest, res: NextApiResponse<ITodos>) => {
  switch (req.method) {
    case GET:
      res.status(200).json(todosData);
      break;
    case POST: {
      const newTodo = req.body;
      todosData.push({
        id: Date.now(),
        isComplete: false,
        ...newTodo,
      });
      res.status(201).json(todosData);
      break;
    }
    default:
  }
};

export default handler;
