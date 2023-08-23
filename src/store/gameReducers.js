const defaultStateBoard = {isXNext: true, board: Array(9).fill(null)}

export const stateGame = (state = defaultStateBoard, {type, payload}) => {
 
    switch(type){
        case "UPDATE":
            return{...state, isXNext: state.isXNext = payload,...state.board}
        case "MOVE_X":
            return{...state, isXNext: state.isXNext = payload,...state.board}
        case "COPY_BOARD":
            return{...state, ...state.isXNext, board: state.board = payload}
        case "NEW_GAME":
            return{...state, ...state.isXNext, board: state.board = payload}
        default:
            return state; 
    }
}

