import React, { useEffect, useState } from "react"
import List from './components/List'
import Item from './components/item'
import TodoForm from "./components/TodoForm"
import Modal from "./components/Modal"
import './Todo.css'

const SAVED_ITEMS = "savedItems"

function Todo(){

    
    const [items, setItems] = useState([]);

   
    function onAddItem(text){

        let item = new Item(text)

        setItems([...items, item])

    }
   
    function onItemDeleted(item){

        let filteredItems = items.filter(it=>it.id != item.id)
        
        setItems(filteredItems)
    }

    function onDone(item){
        let updatedItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems);
    }
    

    return(<div className="container">
        <header className="header"><h1>ToDoList</h1>
        </header><p>Add important tasks of your day</p>
       {<TodoForm onAddItem={onAddItem}></TodoForm>}

       <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        
        </div>)
}



export default Todo;