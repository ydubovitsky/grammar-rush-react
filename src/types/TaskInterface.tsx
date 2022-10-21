export interface TaskInterface {
  id: number,
  task: string,
  answer: string,
  themeName: string
}

export interface UserInterface {
  id?: number,
  username: string,
  jwttoken: string,
  phone: string,
  email: string,
  password?: string,
  password2?: string,
  roles: string[]
}