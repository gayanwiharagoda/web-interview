import { getInstance } from './instance'

export const saveTodoItems = (todoListId, todos) => {
    getInstance().post(`/todo-lists/${todoListId}/items`, {
        todos
    })
}