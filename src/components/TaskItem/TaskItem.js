import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <p>Tags: {task.tags.join(', ')}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
