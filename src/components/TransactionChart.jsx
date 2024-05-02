import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Received: 4000,
		Processed: 2400
	},
	{
		name: 'Feb',
		Received: 3000,
		Processed: 1398
	},
	{
		name: 'Mar',
		Received: 2000,
		Processed: 9800
	},
	{
		name: 'Apr',
		Received: 2780,
		Processed: 3908
	},
	{
		name: 'May',
		Received: 1890,
		Processed: 4800
	},
	{
		name: 'Jun',
		Received: 2390,
		Processed: 3800
	},
	{
		name: 'July',
		Received: 3490,
		Processed: 4300
	},
	{
		name: 'Aug',
		Received: 2000,
		Processed: 9800
	},
	{
		name: 'Sep',
		Received: 2780,
		Processed: 3908
	},
	{
		name: 'Oct',
		Received: 1890,
		Processed: 4800
	},
	{
		name: 'Nov',
		Received: 2390,
		Processed: 3800
	},
	{
		name: 'Dec',
		Received: 3490,
		Processed: 4300
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-xl border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Application's info</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Received" fill="#0ea5e9" />
						<Bar dataKey="Processed" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
