import React from "react";

export default class TodoAdd extends React.Component {
    render() {
        const {handleSubmit, singletodo, handleChange, EditId } = this.props;
        // console.log(this.props)

        return (
            <form className='todoForm' onSubmit={handleSubmit}>
              <input 
                          type='text'
                          id='username'
                          className='input'
                          placeholder='Add Todo Item'
                          name="title"
                          value= {singletodo}
                          onChange= {handleChange}
                />
                <button
                          className='btn'
                          type='submit'
                >
                {EditId? "Edit": "Add"}
                </button>
          </form>
        )
    }
}