const Form = (props) => {
  const {todo, toggleHandlerComplete,i, deleteHandler} = props;
  const todoClasses = ["bold"];
  

        if (todo.complete) {
          todoClasses.push("strike");
  }
  return(
    <div>
            <input  
            onChange={(e) => {
              toggleHandlerComplete(i);
            }} 
            checked={todo.complete} 
            type="checkbox" 
            />
            <span className={todoClasses.join(" ")}>
            {todo.text}</span>
            <button 
            style={{marginLeft: "15px"}} 
            onClick={(e) => {
              deleteHandler(i);
              }}>Delete</button>
          </div>
  )
}

export default Form;