import { getInstance } from './instance'

export const fetchTodoLists = async () => {
    const response = await getInstance().get(`/todo-lists`)
    return response.data
}


