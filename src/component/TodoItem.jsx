import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';

import "../styles/TodoItem.css";

function TodoItem({text, completed, onCompleted, onDeleted}) {
    return (
      <li className="TodoItem">
        <CompleteIcon
        completed={completed}
        onComplete={onCompleted}
        />
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
        <DeleteIcon
          onDeleted={onDeleted}
        />
      </li>
    );
  }

export { TodoItem };