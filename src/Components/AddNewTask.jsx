import { useState } from "react"
import {nanoid} from "nanoid";

const postReq = ()=>{
    return fetch(`http://localhost:3005/tasks`,{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type": "application/json"
        },

        body:`{
            "id":1,
            "name":"sandhya",
            "status":"false",     
        }`,
    })
      .then((res) =>{
        return res.json();
      })
 } 


export default function AddNewTask(){
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    const payload = {
        id: nanoid(),
        title:text,
        status: false,
    }

    const  handleAdd = ()=>{
        setTodo([...todo, payload])
        setText("");
    }


    const  FetchData = async () =>{
        try{
            const data = await postReq();
            setTodo(data);
        }
        catch(err){
            console.log(err);
        }
    }
  
 
    return(
        <div>
            <input placeholder="ADD TODO" onChange={ (e) => setText(e.target.value)}  value={text}></input>
            <button onClick={handleAdd}>ADD TODO</button>
            <ul>
                <div>
                    {todo.map((el)=> {
                        return (
                            <li>{el.title}</li>
                        )
                })}
                </div>
            </ul>
        </div>
    )
}