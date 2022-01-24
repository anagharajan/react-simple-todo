import React from "react";

export default class TodoList extends React.Component {
    render() {
        const { todoList, handleUpdate, handleDelete } = this.props;
        
        return (
            <ul className='allTodos'>
            { todoList.map((item) => (
                <li className='singleTodo' key={item.id}>
                <span 
                  className='todoText'
                  >
                    {item.value}
                  </span>

                  <span>
                    <button
                      className="btn btn-secondary mr-2"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </span>
              </li>
            ))
            }
        </ul>
            
        )
    }
}