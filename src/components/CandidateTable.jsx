import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import {  HiOutlineSearch } from 'react-icons/hi'
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
		level_3: '3/10'
	},
	{
		id: '7',
		job_id: '7453',
		candidate_name: 'Ryan Carroll',
		position: 'IOS Developer',
		level_1: '6/10',
		level_2: '2/10',
		status: 'Hired',
		level_3: '5/10'
	},
	{
		id: '2',
		job_id: '5434',
		candidate_name: 'Mason Nash',
		position: 'React Developer',
		level_1: '6/10',
		level_2: '7/10',
		status: 'Active',
		level_3: '5/10'
	},
	{
		id: '3',
		job_id: '9854',
		candidate_name: 'Luke Parkin',
		position: 'Angular Developer',
		level_1: '6/10',
		level_2: '8/10',
		status: 'Reject',
		level_3: '3/10'
	},
	{
		id: '4',
		job_id: '8763',
		candidate_name: 'Anthony Fry',
		position: 'Python Developer',
		level_1: '6/10',
		level_2: '2/10',
		status: 'Active',
		level_3: '4/10'
	},
	{
		id: '5',
		job_id: '5627',
		candidate_name: 'Ryan Carroll',
		position: 'Designer',
		level_1: '6/10',
		level_2: '3/10',
		status: 'Hired',
		level_3: '7/10'
	}
]

export default function CandidateTable() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-xl border border-gray-200 flex-1">

			<div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
				<strong className="text-gray-700 font-medium">Candidate Status</strong>  
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

			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Job ID</th>
							<th> Name</th>
							<th>Position</th>
							<th>1st level</th>
							<th>2nd level</th>
							<th>3rd level</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.job_id}`}>#{order.job_id}</Link>
								</td>
								<td>
									<Link>{order.candidate_name}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.position}`}>{order.position}</Link>
								</td>
								<td>{order.level_1}</td>
								<td>{order.level_2}</td>
								<td>{order.level_3}</td>
								<td>{getOrderStatus(order.status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
