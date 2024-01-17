import { useState } from "react";

export function CreateTodo(){
    //react-query
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");

    return <div>   
        <input style={{
            padding:10,
            margin:10
        }} type="text " placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }}></input><br></br>
        <input style={{
            padding:10,
            margin:10
        }} type="text " placeholder="description"onChange={function(e){
            const value=e.target.value;
            setDescription(value);
        }}></input><br></br>

        <button style={{
            margin:10
        }}onClick={()=>{
            //axios is better
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(async function(res){
                const json=await res.json();
                alert("todo added");
            })
        }}
        
        >Add a ToDo</button>

    </div>
}