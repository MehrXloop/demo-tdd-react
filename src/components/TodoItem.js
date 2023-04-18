import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, removeHandler, updateTodo,handleEdit }) => {
  let previousDate = new Date(todo.date) <= new Date();
  const styleTitle = previousDate ? styles.prevDate : '';
  const styleDate = previousDate ? styles.prevDate : '';
  return(

 
    <div className={styles.itemContainer}>
      <div>
        
        <input
          type="checkbox"
          name={`checkbox-${todo.id}`}
          checked={todo.completed}
          data-testid={`checkbox-${todo.id}`}
          onChange={() => updateTodo(todo.id)}
        />
        <label
          htmlFor={`checkbox-${todo.id}`}
          onClick={() => updateTodo(todo.id)}
          className={todo.completed ? styles.completed : ''}
        >
         <h3 className={styleTitle}>Title: {todo.title}</h3> 
        </label>
        <label
          htmlFor={`checkbox-${todo.id}`}
          onClick={() => updateTodo(todo.id)}
          className={todo.completed ? styles.completed : ''}
        >
          <p className={styleDate}>Due Date: {todo.date}</p>
        </label>
      </div>
      {/* <button
        className={styles.closeBtn}
        data-testid={`close-btn-${todo.id}`}
        onClick={() => handleEdit(todo.id)}
      >
        EDit
      </button> */}
      <button
        className={styles.closeBtn}
        data-testid={`close-btn-${todo.id}`}
        onClick={() => removeHandler(todo.id)}
      >
        X
      </button>
    </div>
  );
} 
export default TodoItem;
