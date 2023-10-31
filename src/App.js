import { useState } from 'react';
import './App.css';

function App() {
  //js 
  const[todo,setTodo ]=useState("")
  const [todos,setTodos]= useState([])
  const [editIndex, setEditIndex] =useState(-1)
 // console.log(todo);
 // console.log(todos)


const handleChange=(e)=>{
//e.preventDefault() 
if(todo!==" "){
 // setTodos([{id:`${todo}-${Date.now()}`,todo}, ...todos])
  setTodos([...todos,todo])
  console.log(todo);
  console.log(todos);
  setTodo(" ")

}else{
  alert("enter any data")
}
}

const handleEdit = (index)=>{
  const editArray = [...todos]
  setEditIndex(index)
  setTodo(todos[index])

}

const handleDelete=(index) =>{
  const updatedArray = [...todos]
  updatedArray.splice(index,1)
  setTodos(updatedArray)
}

  return (
   <>
   <div class="container flex justify-center mt-8 ">
   <div style={{width:"600px",height:"500px"}}  class="bg-teal-950 flex-col flex items-center  rounded-lg "> 
   <h1 className='mt-5 mb-5 py-2 text-white text-4xl font-semibold'>To Do App</h1>
   <form className='p-2'>
   <div className='flex flex-row'>
   <input value={todo} onChange={(e)=>{setTodo(e.target.value)}} style={{width:"300px"}} class=" shadow-md placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 
    rounded-md  pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
     placeholder="Type task here" type="text" name="search"/>
<button onClick={handleChange} type="button" class="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><i class="fa-solid mx-1 fa-plus"></i>Add</button>
</div>

<ul> 
{
  todos.map((item,index)=>(
    <li key={index} className='single-todo-task flex flex-row bg-teal-200 justify-between mt-5 mb-1 p-3 bg-white rounded-md ' ><div>{item}</div>
    <div className='buttons'>
   {/* <button onClick={()=>handleEdit(index)} type="button" class="text-white  hover:bg-blue-800   rounded-md  text-sm px-1.5 py-2 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><i class="fa-regular mx-2 fa-pen-to-square"></i>Edit</button>
      */} 
       <button onClick={()=>handleDelete(index)} type="button" class="text-white  hover:bg-blue-800   rounded-md  text-sm px-1.5 py-2 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><i class="fa-solid mx-2 fa-trash"></i>Delete</button>
    </div>
       </li>
  ))
}
 

</ul>
</form>

      </div>
 </div>
 
 </>
  );
}

export default App;
