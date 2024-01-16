export function Todos(todos){
    if (!Array.isArray(todos)) {
        console.error('Todos is not an array:', todos);
        return null;
    }
    return <div>
        {/* <h1> Go to the gym</h1>
        <h2>jao jao bsdk</h2>
        <button>Mark as Done!</button> */}
        {todos.map(function (todo){
            return <div>  
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed==true ? "Completed" : "Mark as complete!" }</button> 
            </div>
        })}
    </div>

}