import { useForm} from 'react-hook-form';


const Form = ({ addTask }) => {
    const { register, handleSubmit, reset } = useForm();
    

    const handleFormSubmit = (data) => {
        if (!data.task.trim()) return;
        addTask(data.task);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <input 
                type="text" 
                {...register("task", { required: true })} 
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default Form;
