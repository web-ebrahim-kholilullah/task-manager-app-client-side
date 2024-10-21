import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TaskForm = () => {
  const [task, setTask] = useState({ name: '', description: '', dueDate: '', priority: 'Low', tags: [] });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: Date.now(),
    };
    dispatch(addTask(newTask));
    setTask({ name: '', description: '', dueDate: '', priority: 'Low', tags: [] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        placeholder="Task Name"
        required
      />
      <textarea
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        placeholder="Task Description"
      />
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        required
      />
      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={task.tags.join(', ')}
        onChange={(e) => setTask({ ...task, tags: e.target.value.split(', ') })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
