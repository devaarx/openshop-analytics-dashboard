import React from 'react'
import PostedJobs from '../components/PostedJobs'
import TransactionChart from '../components/TransactionChart'
import CandidateTable from '../components/CandidateTable'
import AssignmentDetails from '../components/AssignmentDetails'
import UpcomingEvents from '../components/UpcomingEvents'
import Calender from '../components/Calender'

export default function Dashboard() {

	return (
		<div className="flex flex-col gap-4">

			<div className="flex items-center">
				<h1 className="text-black text-3xl">HR Employee</h1>
				<button className=" bg-blue-700 text-white py-4 rounded-md px-8 ml-auto shadow-md">Task Details</button>
			</div>
			<strong className="text-gray-700 font-medium">Enjoy your selecting potential candidates Tracking and Management System.</strong>
			<div className="flex flex-row gap-4 w-full">
				<div className="w-3/5">
					<TransactionChart />
				</div>
				<div className="w-2/5">
					<AssignmentDetails />
				</div>
			</div>
			<div className="flex flex-row gap-4 w-full">
				<div className="w-4/5">
					<PostedJobs />
					<div className='mt-6'>
					<CandidateTable />
					</div>
				</div>
				<div className="w-1/5 flex flex-col gap-4">
					<Calender />
					<div className='mt-6'>
					<UpcomingEvents />
					</div>
				</div>

			</div>
		</div>
	)
}
