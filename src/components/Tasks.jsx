import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { getTaskStatus } from '../lib/helpers'
import '../../src/styles/Tasks.css'

//import notification SVG
import highBell from '../components/img/icons/Priority-High.svg'
import mediumBell from '../components/img/icons/Priority-Medium.svg'
import lowBell from '../components/img/icons/Priority-Low.svg'

export default function Tasks() {
    // State to hold the tasks fetched from the API
    const [tasks, setTasks] = useState([])
    // State to manage the current page for pagination
    const [currentPage, setCurrentPage] = useState(1)
    // Constant to define how many tasks to display per page
    const tasksPerPage = 8

    // Fetch tasks from the API when the component mounts
    useEffect(() => {
        fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
            .then((response) => response.json())
            .then((data) => setTasks(data))
    }, [])

    // Utility function to format the date
    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMM dd')
    }

    // Utility function to get the status of a task
    const getStatus = (completed) => {
        return completed ? 'Done' : 'In Progress'
    }

    // Function to handle page changes for pagination
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // Slice the tasks array to get the tasks for the current page
    const displayedTasks = tasks.slice((currentPage - 1) * tasksPerPage, currentPage * tasksPerPage)

    // Calculate the total number of pages for pagination
    const totalPages = Math.ceil(tasks.length / tasksPerPage)

    // Utility function to determine the color based on the priority

    const getPriorityIcon = (priority) => {
        switch (priority) {
            case 'HIGH':
                return highBell
            case 'MEDIUM':
                return mediumBell
            case 'LOW':
                return lowBell
            default:
                return lowBell
        }
    }

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Tasks</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Created By</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedTasks.map((task) => (
                            <tr key={task.id}>
                                <td>
                                    {/* Bell icon based on priority */}
                                    <img
                                        src={getPriorityIcon(task.priority)}
                                        alt="Priority Icon"
                                        className="Rectangle656"
                                        style={{ marginRight: '8px', display: 'inline-block' }}
                                    />
                                    {task.todo}
                                    {!task.completed && (
                                        <div>
                                            <button className="mark-as-done-button">Mark as done</button>
                                        </div>
                                    )}
                                </td>
                                <td>{task.createdBy}</td>
                                <td>{formatDate(task.createdAt)}</td>
                                <td>{getTaskStatus(getStatus(task.completed))}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination section */}
            <div className="mt-4 flex justify-center">
                {/* Generate pagination buttons based on the total number of pages */}
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
