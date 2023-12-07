import axios from 'axios'
import { API_KEY, API_URL } from 'config'
import { TodoItem } from 'types'

const createEndpointUrl = (key?: string) => `${API_URL}/Note${key ?? ''}`

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  'X-Api-Key': API_KEY,
}

export const getTodos = (todoName: string) => () =>
  fetch(createEndpointUrl(`/${todoName}`), { headers }).then((response) =>
    response.json()
  )

export const createTodo = (newTodo: Pick<TodoItem, 'title' | 'noteValue'>) =>
  axios.post(createEndpointUrl(), newTodo, { headers })

export const deleteTodo = (id: number) =>
  axios.delete(createEndpointUrl(), { params: { id }, headers })
