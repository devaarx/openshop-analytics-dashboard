import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'
import { ResponsiveContainer } from 'recharts'
import { FaArrowUp } from "react-icons/fa6";
import { FaPython, FaJava, FaAngular, FaReact } from 'react-icons/fa';
import { IoFilterOutline } from "react-icons/io5";

const recentOrderData = [
	{
		id: '1',
		job_id: '4324',
		candidate_name: 'Shirley A. Lape',
		position: 'Junior Developer',
		level_1: '6/10',
		level_2: '5/10',
		status: 'Active',
		level_3: '3/10',
		icon: FaJava
	},

	{
		id: '2',
		job_id: '5434',
		candidate_name: 'Mason Nash',
		position: 'React Developer',
		level_1: '6/10',
		level_2: '7/10',
		status: 'Active',
		level_3: '5/10',
		icon: FaReact
	},
	{
		id: '3',
		job_id: '9854',
		candidate_name: 'Luke Parkin',
		position: 'Angular Developer',
		level_1: '6/10',
		level_2: '8/10',
		status: 'Reject',
		level_3: '3/10',
		icon: FaAngular
	},
	{
		id: '4',
		job_id: '8763',
		candidate_name: 'Anthony Fry',
		position: 'Python Developer',
		level_1: '6/10',
		level_2: '2/10',
		status: 'Active',
		level_3: '4/10',
		icon: FaPython
	},
]

export default function PostedJobs() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-xl border border-gray-200 flex-1">

			<div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
				<strong className="text-gray-700 font-medium">Posted Jobs</strong>
				<strong className="text-gray-700 font-medium ml-12"><Link className="underline">View All</Link></strong>
				<div className="relative ml-auto">

					<HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
					<input
						type="text"
						placeholder="Search..."
						className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
					/>
				</div>
				<div className="w-24 h-24 ml-4 rounded-sm flex items-center justify-center">
					<IoFilterOutline className="ml-2 text-blue-700 text-2xl" />
					<span className="text-black text-xl ml-2">Filters</span>
				</div>


			</div>
			<div className="flex flex-wrap gap-4 mt-6">
				{recentOrderData.map((jobs => (
					<div className="w-[20rem] h-[22rem] p-4 rounded-xl border border-gray-200 flex">
						<div className="mt-5 w-full flex-1 text-xs">
							<ResponsiveContainer width="100%" height="100%">
								<div className="flex items-center">
									<jobs.icon className="text-2xl text-blue-500 mr-2" />
									<strong className="text-xl">{jobs.position}</strong>
									<div className="ml-auto top-1/2 transform -translate-y-1/2">
										<span className="bg-black w-1 h-1 rounded-full block mb-1 mt-1"></span>
										<span className="bg-black w-1 h-1 rounded-full block mb-1 mt-1"></span>
										<span className="bg-black w-1 h-1 rounded-full block mt-1"></span>
									</div>
								</div>

								<div className="border-t border-gray-300 mt-2 mb-7"></div>
								<p className="pl-14 text-lg">Senior developers</p>
								<div className="w-24 h-24 ml-20 mt-6 bg-blue-500 rounded-sm flex items-center justify-center">
									<span className="text-white text-4xl font-bold">258</span>
								</div>
								<p className="pl-14 text-lg mt-4 ml-2">Total Applicants</p>
								<div className="border-t border-gray-300 mt-2 mb-2"></div>

								<div className="flex items-center">
									<p className="flex items-center">
										<span><FaArrowUp className="mr-1 text-blue-500" /></span>
										<span className="text-blue-500 pr-1">28%</span> vs Last month
									</p>
									<p className="ml-auto">6min ago</p>
								</div>
							</ResponsiveContainer>
						</div>
					</div>
				)))}
			</div>
		</div>
	)
}

