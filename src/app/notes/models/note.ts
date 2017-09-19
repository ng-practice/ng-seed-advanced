import { Todo } from './todo';

export class Note {
  guid: string;
  title: string;
  text: string;

  todos: Todo[];
}
