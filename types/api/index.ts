export interface ITodo {
  id: number;
  subject: string;
  isComplete: boolean;
  priority: 'low' | 'medium' | 'high';
  category?: 'work' | 'personal';
}

export type ITodos = ITodo[];

export type IPartialTodo = Omit<ITodo, 'id' | 'isComplete'>;
