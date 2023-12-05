import '../styles/TodoCounter.css'


function TodoCounter({total, completed}){
    const isComplete = total === completed;
    return isComplete ?
    <h1 className='TodoCounter'>¡Haz completado todas tus tareas</h1>
    : (
        <h1 className='TodoCounter'>
            Has completado <span>{completed}</span> de <span>{total}</span> TODO'S</h1>
    );
}

export { TodoCounter };