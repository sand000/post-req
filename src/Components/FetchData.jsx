import { useState } from "react";


// fetching from json server api
 function getData(){
    return fetch(`http://localhost:3005/tasks`)
                .then((res) => {
                   return res.json();
                });
}

// fetchdata
export default function FetchData(){

    const [todo, setTodo] = useState([]);

    const handleFetchData =  async ()=>{
        try{
            const data = await getData();
            setTodo(data);
      } catch(err){
            console.log(err);
        }
     }

    return (
        <div>
            <button onClick={handleFetchData}>GET TASKS</button>
            <ul>
                {todo.map((item) => {
                    return(
                        <li>{item.task}</li>
                    )    
                })}
            </ul>
        </div>
    )
}