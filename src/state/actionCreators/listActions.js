import { CONSTANTS } from "./index"

export const addList = (title)=>{
    return {
        type: CONSTANTS.ADD_LIST,
        payload:title
    }
}

export const removeList = (listId)=>{
    return {
        type: CONSTANTS.REMOVE_LIST,
        payload:listId
    }
}