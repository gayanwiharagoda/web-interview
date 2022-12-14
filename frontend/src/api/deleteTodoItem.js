
import { getInstance } from './instance'

export const deleteTodoItem = (listId, itemId) =>
    getInstance().delete(`/todo-lists/${listId}/items/${itemId}`)