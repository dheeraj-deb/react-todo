import "./App.css";
import { useState } from "react";
function App() {
  const [toDOs, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          onKeyUp={(e)=>{
            if(e.key === "Enter"){
              setTodo(e.target.value)
              setTodos([...toDOs, {id: Date.now(), text:toDo, status:false}])
              e.target.value = " "
            }
          }}
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() => {
            setTodos([...toDOs, { id: Date.now(), text: toDo, status: false }]);
          }}
        ></i>
      </div>
      <div className="todos">
        {toDOs.map((elem, index) => {
          return (
            <div className="todo" key={index}>
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      toDOs.filter((elem2) => {
                        if (elem2.id === elem.id) {
                          elem2.status = e.target.checked;
                        }
                        return elem2;
                      })
                    );
                  }}
                  value={elem.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{elem.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={(e) => {
                    setTodos(toDOs.filter((deletelem)=>{
                      let temp
                      if(deletelem.id !== elem.id){
                        temp = deletelem
                      }
                      return temp
                    }))
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
