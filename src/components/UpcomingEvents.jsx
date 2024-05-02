import React from 'react'
import { Link } from 'react-router-dom'

const candidate_data = [
	{
		id: '3432',
		interview: 'interview with Designer',
		created: 'created by stella',
		product_price: '$1499.00',
		time: "10 A.M to 11 A.m"
	},
	{
		id: '7633',
		interview: 'interview with PMO',
		created: 'created by stephan',
		product_price: '$399.00',
		time: "10 A.M to 11 A.m"
	},
	{
		id: '6534',
		interview: 'interview with Net.Admin',
		created: 'created by stella',
		product_price: '$899.00',
		time: "10 A.M to 11 A.m"
	},
	{
		id: '9234',
		interview: 'interview with Designer',
		created: 'created by stephan',
		product_price: '$499.00',
		time: "10 A.M to 11 A.m"
	},
	{
		id: '4314',
		interview: 'interview with PMO',
		created: 'created by stella',
		product_price: '$699.00',
		time: "10 A.M to 11 A.m"
	},
	{
		id: '4342',
		interview: 'interview with Net.Admin',
		created: 'created by stella',
		product_price: '$399.00',
		time: "10 A.M to 11 A.m"
	}
]

function UpcomingEvents() {
	return (
		<div className="w-[20rem] p-4 rounded-xl ">
			<strong className="text-gray-700 font-bold text-2xl">Upcomings</strong>
			<strong className=" font-medium pl-16"><Link className="underline text-blue-700">View All</Link></strong>

			<div className="mt-4 flex flex-col gap-3">
				{candidate_data.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>
					
						<div className="w-12 h-12 bg-gray-200 rounded-md flex flex-col items-center justify-center">
							<span className="text-black text-md ">07</span>
							<span className="text-black text-md ">FEB</span>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.interview}</p>
							<span className='text-black text-xs'>
								{product.time}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">
							<button className=" bg-blue-700 text-white py-2 rounded-md px-2 ml-auto shadow-md">Task Details</button>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default UpcomingEvents
