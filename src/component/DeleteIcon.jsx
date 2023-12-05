import React from "react";
import {TodoIcon} from './TodoIcon'

function DeleteIcon({onDeleted}) {
    return (
        <TodoIcon
        type="delete"
        color="gray"
        onClick={onDeleted}
        />
    );
}

export {DeleteIcon};