export function Todos(todos){
    // if (!Array.isArray(todos)) {
    //     console.error('Todos's not an array:', todos);
    //     return null;
    // }
    return <div>
         {todos.map(function (todo, index){
            return (<div key = {index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed==true ? "Completed" : "Mark as complete!" }</button> 
            </div>)
        })}
    </div>

}