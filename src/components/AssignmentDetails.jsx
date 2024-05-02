import React from 'react'
import { ResponsiveContainer } from 'recharts'
import { GrNotes } from "react-icons/gr";


export default function AssignmentDetails() {
	return (
		<div className="w-[43rem] h-[22rem] bg-blue-500 p-4 rounded-xl border border-gray-200 flex flex-col">
			<div className="mt-5 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">

					<div className="bg-white shadow-md rounded-sm p-6 w-40 ml-6">
						<GrNotes fontSize={100} className='text-gray-600' />
					</div>

					<h2 className="text-5xl font-bold mt-8 text-white ml-7">0033</h2>
					<div className="flex items-center">
						<p className="text-white mt-5 text-xl ml-7">New Assignment's</p>
						<button className="bg-white text-black py-4 rounded-sm px-8 ml-48 shadow-md">VIEW DETAILS</button>
					</div>

				</ResponsiveContainer>
			</div>
		</div>
	)
}
