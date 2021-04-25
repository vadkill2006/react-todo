import React, {useEffect, useState} from 'react'

const getItem = () => {
    let list = localStorage.getItem('lists');
    console.log(list)
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }else{
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getItem());

    const addItem = () =>{
        if(!inputData){

        }else{
            setItems([...items, inputData]);
            setInputData("");
        }        
    }

    const deleteItem = (id) =>{
        console.log(id)
        const updatedItem = items.filter((elem, ind) =>{
            return ind !== id;
        });

        setItems(updatedItem);
    }

    const removeAll = () =>{
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items])
    
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Items" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
                    </div>
                    <div className="showItems">
                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>
                                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(ind)}></i>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
