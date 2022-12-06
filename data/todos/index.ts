import { ITodos } from '../../types/api';

export const todosData: ITodos = [
  {
    id: 1,
    subject: 'Make Todos app for NovaFori application',
    isComplete: false,
    priority: 'high',
    category: 'work',
  },
  {
    id: 2,
    subject: 'Get stuff for Sunday dinner',
    isComplete: false,
    priority: 'medium',
    category: 'personal',
  },
  {
    id: 3,
    subject: 'Buy Christmas presents for family',
    isComplete: false,
    priority: 'high',
    category: 'personal',
  },
  {
    id: 4,
    subject: 'Watch college football highlights',
    isComplete: false,
    priority: 'low',
    category: 'personal',
  },
  {
    id: 5,
    subject: "Write new year's resolution list",
    isComplete: false,
    priority: 'low',
    category: 'personal',
  },
  {
    id: 6,
    subject: 'Get laundry detergent',
    isComplete: true,
    priority: 'medium',
    category: 'personal',
  },
];
