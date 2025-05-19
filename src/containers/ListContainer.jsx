import React, { useState } from 'react'
import { TaskInput, TitleInput } from '../components/Inputs'
import { IconButton, IconOnlyButton } from '../components/Buttons'
import { Check, CircleX, Plus, SquarePen, X } from 'lucide-react'

function ListContainer() {

    const [showInput, setShowInput] = useState(false)
    const [title, setTitle] = useState("")
    const [isTitleSaved, setIsTitleSaved] = useState(false)
    const [tasks, setTasks] = useState([])
    const [currentTask, setCurrentTask] = useState("")
    const [editTask, setEditTask] = useState(null)

    const onPlusButtonClick = () => {
        setShowInput(true)
    }

    const onSaveTitleButtonClick = () => {
        if (title.trim() === "") {
            alert("Title cannot be empty!")
            return
        }
        setIsTitleSaved(true)
    }

    const onSaveTaskButtonClick = () => {
        if (currentTask.trim() === "") {
            alert("Task cannot be empty!")
            return
        }
        setTasks((prevTasks) => [
            ...prevTasks,
            { id: Date.now(), text: currentTask }
        ])
        setCurrentTask("")
        setShowInput(false)
    }

    const onCheckTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        )
    }

    const onEditTaskButtonClick = (taskId) => {
        const taskToEdit = tasks.find((task) => task.id === taskId)
        if (taskToEdit) {
            setEditTask({ id: taskToEdit.id, text: taskToEdit.text })
        }
    }

    const onSaveEditedTaskButtonClick = () => {
        if ((!editTask || editTask.text.trim) === "") {
            alert("Task cannot be empty!")
            return
        }
        setTasks((prevTasks) => (
            prevTasks.map((task) =>
                task.id === editTask.id ? { ...task, text: editTask.text } : task
            )
        ))
        setEditTask(null)
    }

    const onCancelEditTaskButtonClicked = () => {
        setEditTask(null)
    }

    const onRemoveTaskButtonClick = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => (task.id) !== taskId)
        )
    }

    return (
        <div className='flex flex-col gap-2 w-max h-max bg-white rounded-xl drop-shadow-lg p-5 m-5'>
            {isTitleSaved ? (
                <p className='text-lg font-bold text-center'>{title}</p>
            ) : (
                <TitleInput
                    value={title}
                    onValueChange={(e) => setTitle(e.target.value)}
                    onTitleButtonClick={onSaveTitleButtonClick}
                />
            )}
            <IconButton
                Icon={Plus}
                stroke={"#198ffb"}
                size={16}
                buttonText={'Add new task'}
                onClick={onPlusButtonClick}
            />
            {showInput && (
                <TaskInput
                    value={currentTask}
                    onValueChange={(e) => setCurrentTask(e.target.value)}
                    onTaskButtonClick={onSaveTaskButtonClick}
                />
            )}

            <ul className='mt-3 space-y-1'>
                {tasks.map((task) => (
                    <li key={task.id} className='flex items-center gap-2 py-1'>
                        <input
                            type='checkbox'
                            className='size-[15px]'
                            checked={task.completed}
                            onChange={() => onCheckTask(task.id)}
                        />
                        {editTask && editTask.id === task.id ? (
                            <div className='flex items-center gap-2 flex-grow'>
                                <input
                                    type='text'
                                    value={editTask.text}
                                    className='flex-grow p-1 rounded border'
                                    onChange={(e) =>
                                        setEditTask((prev) => ({ ...prev, text: e.target.value }))
                                    }
                                />
                                <IconOnlyButton
                                    Icon={Check}
                                    stroke={"#198FFB"}
                                    size={16}
                                    onClick={onSaveEditedTaskButtonClick}
                                />
                                <IconOnlyButton
                                    Icon={X}
                                    stroke={"#198FFB"}
                                    size={16}
                                    onClick={onCancelEditTaskButtonClicked}
                                />
                            </div>
                        ) : (
                            <div className='flex items-center gap-2 py-1'>
                                <p className={`flex-grow text-left ${task.completed ? "line-through text-gray-400" : ""}`}>{task.text}</p>
                                <IconOnlyButton
                                    Icon={SquarePen}
                                    stroke={"#198FFB"}
                                    size={16}
                                    onClick={() => onEditTaskButtonClick(task.id)}
                                />
                                <IconOnlyButton
                                    Icon={CircleX}
                                    stroke={"#198ffb"}
                                    size={16}
                                    onClick={() => onRemoveTaskButtonClick(task.id)}
                                />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListContainer