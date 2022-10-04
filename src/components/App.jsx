import React from "react";
import { useState } from "react";
import ToDoLists from "./TodoLists";

const App = () => {
    const [inputList, setInputList] = useState("");

    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    };

    const deleteItem = (id) => {
        console.log("Deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index !== id;
            });
        });
    }

    
    return (<>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text"
                    placeholder="Add a task"
                    value={inputList}
                    onChange={itemEvent} />

                <button onClick={listOfItems}> + </button>

                <ol>
                    {items.map((itemValue, index) => {
                        return (<ToDoLists key={index}
                            id={index}
                            text={itemValue}
                            onSelect={deleteItem} />
                        );
                    })
                    }
                </ol>
            </div>
        </div>
    </>
    )

}

export default App;