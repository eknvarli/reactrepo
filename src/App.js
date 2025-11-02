import {useState} from 'react';

function App() {
    const [todo, setTodo] = useState([]);

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Todo List</h1>

                {todo.length === 0 ? (
                    <div className="text-center text-gray-500 py-4">
                        No todos yet. Add your first todo!
                    </div>
                ) : (
                    <ul className="mb-6 space-y-2">
                        {todo.map((item, index) => (
                            <li key={index} className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 flex items-center justify-between">
                                <span className="text-gray-700">{item}</span>
                                <button
                                    onClick={() => setTodo(todo.filter((_, i) => i !== index))}
                                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                <form onSubmit={(e) => {
                    e.preventDefault();
                    var todoItem = document.getElementById('todoitem');
                    if (todoItem.value.trim()) {
                        setTodo([...todo, todoItem.value]);
                        todoItem.value = '';
                    }
                }}>
                    <div className="flex gap-2">
                        <input
                            id="todoitem"
                            name="todoitem"
                            placeholder="Add a new todo..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition duration-200"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App;