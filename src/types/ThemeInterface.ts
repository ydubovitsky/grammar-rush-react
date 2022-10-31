import { TaskInterface } from "./TaskInterface"

export interface ThemeInterface {
  id: number,
  name: string,
  taskList: TaskInterface[]
}