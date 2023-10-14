interface TodoProps {
    myTodo :string, 
    index :number,
    del(index :number) :void
}

function TodoList(props :TodoProps) {

    let myTodo = props.myTodo;
    let index = props.index;
    let del = props.del;

    return(
        <div className="todoList">
            <span>{myTodo}</span>
            <span>{index}</span>
            <button className="delBtn" onClick={e => {
                del(index);
            }}>X</button>
        </div>
    )
}

export default TodoList;