import React, {useState} from "react"
import edit from "./assets/Vector.svg"
import del from "./assets/delete.svg"
import Swal from 'sweetalert2'

function ToDoList(){

        const [tasks, setTasks] = useState([]);
        const [newTask, setNewTask] = useState("");

        // Gerenciamento de novas inserções
        function handleInputChange(event){
            setNewTask(event.target.value);
        }

        // Adicionar novas tarefas
        function addTask(){

            if(newTask.trim() !== ""){
                setTasks(t => [...t, newTask]);
                setNewTask("");
            }
            
        }

        // Geração de Pop-Up para confirmação delete
        const handleClick = (task, index) => {
        Swal.fire({
            title: "Deseja excluir esse item destaque?",
            text: task,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim",
            cancelButtonText: "Não"
          }).then((result) => {
            if (result.isConfirmed) {
              
                deleteTask(index);
              
            }
          });
        }

        // Deletar tarefa
        function deleteTask(index){
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks(updatedTasks);
        } 

        return(

            //Menu superior
            <div className="to-do-list">
                <div className="header">
                        <span>Organização</span>
                        <span>Tarefas</span>
                </div>

            <h1>Otimize seu tempo e se organize com o nosso Planejador Diário .</h1>
            
            <div id="form">
                <ul className="title">
                           <li className="title2">Tarefas</li>
                           <li className="title2">Status</li>
                           <li className="title2">Opções</li>

                      </ul>
                <hr></hr>

                <ol>
          
                    {tasks.map((task, index) => 
                        <li key={index}>
                            
                            <span className="text">{task}</span>
                            <div><input type="checkbox"></input></div>
                            
                            <div><button className="delete-button"><img src={edit } width="20.42" height="22.5" /></button>
                            <button className="delete-button"><img src={del }  width="20.42" height="22.5" onClick={() => handleClick(task, index)}/></button></div>                                                 
                        </li>
                                      
                    )}                       
                </ol>
             
                <div id="add">
                    <input type="text" placeholder="Nova tarefa" value={newTask} onChange={handleInputChange}/>
                    <button className="add-button" onClick={addTask}>+</button>
  
                </div>
                </div>                 
        </div>)
}

export default ToDoList