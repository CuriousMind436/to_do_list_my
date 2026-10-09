import {useState} from 'react'
let To_do = function(){
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState(["brush my teeth  "]);
    let addTask = function(){
        if(task == "") return;
        setTasks([...tasks,task])
        setTask('')
    }
    let removeTask = function(i){
        if(window.confirm("Vous etes sure ?")){
            setTasks(tasks.filter((el,index)=>i!==index))
        }
    }
    return (
<div className="card p-5 bg-dark text-white">
    <h5 className="card-title text-center">to do list app</h5>
    <div className='d-flex gap-3'>
    <input type="text" placeholder="ecrire une tache ici " className="p-2" onChange={(e)=>setTask(e.target.value)} value={task}/>
    <button className="btn btn-primary p-2" onClick={addTask}>Ajouter</button>
    </div>
    <div className="card-body">
    <ul>
        {tasks.map((el,index)=>{
            return <div className='d-flex justify-content-between'>
                <li key={index}>{el}</li>
                <span className='text-danger' onClick={()=>removeTask(index)}>x</span>
            </div>
        })}
    </ul>
    </div>
</div>
)}
export default To_do;