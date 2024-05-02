import React from 'react'
import classNames from 'classnames'
import {  useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-blue-500 hover:no-underline active:bg-blue-500 rounded-sm text-base'


export default function Sidebar() {
	return ( 
		<div className="bg-white w-30 p-3 flex flex-col rounded-tr-xl">
		
			<div className="py-4 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
		
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<p
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-blue-500 text-white' : 'text-neutral-700', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
		</p>
	)
}
