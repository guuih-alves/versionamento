
import Teacher1 from "./assets/Vector.svg"
import Teacher2 from "./assets/delete.svg"


function ToDoList(){
 



        return(

            
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
          
                    
                        <li>
                            
                     
                            <span className="text"></span>
                            <div><input type="checkbox"></input></div>
                            
                            <div><button className="delete-button"><img src={Teacher1 } width="20.42" height="22.5" /></button>
                            <button className="delete-button"><img src={Teacher2 }  width="20.42" height="22.5"/></button></div>
                            
                            
                        </li>
                                      
        
                         
                </ol>
        
                
                <div id="add">
                    <input type="text" placeholder="Nova tarefa"/>
                    <button className="add-button">+</button>
  
                </div>

                </div>             
        
        </div>)
}

export default ToDoList