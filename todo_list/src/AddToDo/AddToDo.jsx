import { useState } from "react";

function AddToDo(updateList){
    const {InputText, setInputText}=useState('');
    return(<>
    <input 
    type="text"
    value={InputText}
    placeholder="add your next Todo"
    onChange={e => setInputText(e.target.value)}
    />
    <button onClick={()=>updateList(InputText)}>Add</button>
    </>)
}
export default AddToDo;
