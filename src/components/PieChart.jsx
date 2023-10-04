import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import '../styles/PieChart.css'

const COLORS = ['#e95a5a', '#f1c95f', '#3780e7'] // order high, medium, low

const RADIAN = Math.PI / 180

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

export default function PriorityPieChart() {
    const [data, setData] = useState([])

    useEffect(() => {
        // Fetch data from the API
        fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
            .then((response) => response.json())
            .then((data) => {
                const priorities = data.reduce((acc, task) => {
                    acc[task.priority] = (acc[task.priority] || 0) + 1
                    return acc
                }, {})

                const pieData = Object.entries(priorities).map(([name, value]) => ({ name, value }))
                setData(pieData)
            })
    }, [])

    return (
        <div className="pie-container">
            <strong className="text-gray-700 font-medium">Task Priorities</strong>
            <div className="chart-content">
                <div className="chart-section">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="45%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={60}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="label-section">
                    <div className="label-item">
                        <span className="label-dot high"></span> High
                    </div>
                    <div className="label-item">
                        <span className="label-dot medium"></span> Medium
                    </div>
                    <div className="label-item">
                        <span className="label-dot low"></span> Low
                    </div>
                </div>
            </div>
        </div>
    )
}
