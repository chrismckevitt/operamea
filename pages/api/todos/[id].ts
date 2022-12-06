import type { NextApiRequest, NextApiResponse } from 'next';

import { todosData } from '../../../data/todos';
import { ITodo, ITodos } from '../../../types/api';
import { DELETE, PATCH } from '../../../constants/methods';

const handler = (req: NextApiRequest, res: NextApiResponse<ITodos>) => {
  const todoId = Number(req.query.id);
  const index = todosData.findIndex((todo: ITodo) => todo.id === todoId);
  switch (req.method) {
    case DELETE: {
      todosData.splice(index, 1);
      res.status(200).json(todosData);
      break;
    }
    case PATCH: {
      todosData[index].isComplete = !todosData[index].isComplete;
      res.status(200).json(todosData);
      break;
    }

    default:
  }
};

export default handler;
