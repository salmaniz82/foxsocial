import { useState } from "react"

export default function changeState(){


    const [count, setCount] = useState(0);

    const [todos, setTodos] = useState([
        {'id': 1, task: 'something to do'}
    ]);

    console.log(todos);


    function updateCount(e) {
        e.preventDefault();

        /*           
        setCount( (previousCount) => previousCount + 1  );
        */
        setCount( count + 1  );

    }


    function handleAddtodo(e){
        e.preventDefault();
        /*
        setTodos( (prevTodos) => (

            {...prevTodos, {id: 2, task: 'another task'}}
        ))
        */
      

        /*
        setTodos( (prevTodos) => {
            return (
                [ {...prevTodos}, {id: 2, task: "some todo"}} ]
            )
        })
        */

        let newTodo = {id: 2, task: 'hello'}

        /*
        setTodos([...todos, newTodo]);
        */

        /*

        setTodos( (prevtodo) => {

            return [...prevtodo, newTodo]

        });

        */

        setTodos( (prevtodo) => [...prevtodo, newTodo] );


    }

    return (

        <>
        <h1>Change state lab</h1>
        <button onClick={updateCount}>Count : {count}</button>
        {todos.map( (todo) => 
            <div key={todo.id}>{todo.task}</div>
     
        )}

        <button onClick={handleAddtodo}>static Add</button>
        </>

    )


}