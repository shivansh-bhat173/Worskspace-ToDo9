import { CONSTANTS } from "./index"

export const addComment = (cardId,listId,comment,by,time)=>{
    return {
        type: CONSTANTS.ADD_COMMENT,
        payload:{cardId,listId,comment,by,time}
    }
}

export const removeComment = (cardId,listId,comment,by)=>{
    return {
        type: CONSTANTS.REMOVE_COMMENT,
        payload:{cardId,listId,comment,by}
    }
}
