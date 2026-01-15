import React from "react";
import "./App.css";
import Header from "./components/header";
import Input from "./components/input";
import List from "./components/List.jsx";
import { useState, useEffect } from "react";
import { taskAPI } from "./services/api"; // Import API functions

// Define a constant key for localStorage to avoid typos
const STORAGE_KEY = "crud-app";

function App() {
  // // STEP 2: Initialize state from localStorage
  // // This function runs ONLY ONCE when the component first mounts
  // const [items, setItems] = useState(() => {
  //   // Try to get saved items from localStorage
  //   const savedItems = localStorage.getItem(STORAGE_KEY);

  //   return savedItems ? JSON.parse(savedItems) : [];
  // });

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [inputValue, setInputValue] = useState("");

  // State for Update functionality
  const [editingIndex, setEditingIndex] = useState(null); // Track which item is being edited
  const [editValue, setEditValue] = useState(""); // Store temporary edit value

  useEffect(() => {
    // Convert the items array to a JSON string and save it
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    // console.log("Items saved to localStorage:", items);
    fetchTasks();

  }, []);// Dependency array: runs when 'items' changes


  const fetchTasks = async () => {
    try {
      setLoading(true);
      const tasks = await taskAPI.getAllTasks();
      setItems(tasks);
      setError(null);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };
  
  // localStorage
  // function handleAddItem(e) {
  //   e.preventDefault();
  //   if (inputValue.trim()) {
  //     setItems([...items, inputValue]);
  //     setInputValue("");
  //     console.log([...items, inputValue]);
  //   }
  // }


  const handleAddItem = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      try {
        // 1. Send to backend
        const newTask = await taskAPI.createTask(inputValue);
      
        // 2. Add to local state (with ID from server)
        setItems([newTask, ...items]); // Add to beginning
      
        // 3. Clear input
        setInputValue("");
        setError(null);
      } catch (error) {
        console.error('Error creating task:', error);
        setError('Failed to create task');
      }
    }
  };
  
  // localStorage

  // const handleDeleteItem = (index) => {
  //   const newItems = items.filter((items, i) => i !== index);
  //   setItems(newItems);
  //   console.log(newItems);
  // };


  const handleDeleteItem = async (id) => {
    try {
      // 1. Delete from backend
      await taskAPI.deleteTask(id);
    
      // 2. Remove from local state
      setItems(items.filter(item => item.id !== id));
      setError(null);
    } catch (error) {
      console.error('Error deleting task:', error);
      setError('Failed to delete task');
    }
  };


  // const handleStartEdit = (index) => {
  //   setEditingIndex(index);
  //   setEditValue(items[index]);
  // };

  // const handleSaveEdit = () => {
  //   const newItems = items.map((item, i) =>
  //     i === editingIndex ? editValue : item
  //   );
  //   setItems(newItems);
  //   setEditingIndex(null);
  //   setEditValue(""); // Clear temporary edit value
  //   console.log(newItems);
  // };

  // const handleCancelEdit = () => {
  //   setEditingIndex(null);
  //   setEditValue("");
  // };

  const handleStartEdit = (index) => {
    setEditingIndex(index);
    setEditValue(items[index].taskText); // Get text from object
  };

  const handleSaveEdit = async () => {
    try {
      // 1. Get the task being edited
      const taskToUpdate = items[editingIndex];
    
      // 2. Update in backend
      const updatedTask = await taskAPI.updateTask(taskToUpdate.id, {
        taskText: editValue,
        completed: taskToUpdate.completed
      });
    
      // 3. Update in local state
      const newItems = items.map(item =>
        item.id === updatedTask.id ? updatedTask : item
      );
      setItems(newItems);
    
      // 4. Clear edit state
      setEditingIndex(null);
      setEditValue("");
      setError(null);
    } catch (error) {
      console.error('Error updating task:', error);
      setError('Failed to update task');
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditValue("");
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl">⏳</div>
          <p className="mt-2 text-gray-600">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center animate-fade-in">
      <div className="w-full max-w-[500px] bg-white rounded-[24px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.03)] p-8 sm:p-10 animate-scale-in">
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        <Header />
        <div className="mt-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <Input
            handleAddItem={handleAddItem}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
        <div
          className="mt-8 animate-slide-up"
          style={{ animationDelay: "0.2s" }}>
          <List
            items={items}
            handleDeleteItem={handleDeleteItem}
            editingIndex={editingIndex}
            editValue={editValue}
            setEditValue={setEditValue}
            handleStartEdit={handleStartEdit}
            handleSaveEdit={handleSaveEdit}
            handleCancelEdit={handleCancelEdit}
          />
        </div>
      </div>
    </div>
  );
}
  


export default App;
