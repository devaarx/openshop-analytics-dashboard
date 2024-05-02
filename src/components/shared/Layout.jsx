import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-col">
			<Header />
			<div className="flex flex-1 mt-6 overflow-x-hidden overflow-y-auto" >
				
				<Sidebar />
				<div className="flex flex-col flex-1">
					<div className="p-4 min-h-0 overflow-auto">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	)
}
