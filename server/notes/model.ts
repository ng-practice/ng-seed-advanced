import { Todo } from '../todos/model';

export class Note {
  guid: string;
  title: string;
  text: string;

  todos: Todo[];
}
