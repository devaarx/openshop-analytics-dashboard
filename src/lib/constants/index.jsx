import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineBriefcase,
	HiOutlineUsers,
	HiMail,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'application',
		label: 'Application',
		path: '/application',
		icon: <HiOutlineCube />
	},
	{
		key: 'jobs',
		label: 'Jobs',
		path: '/jobs',
		icon: <HiOutlineBriefcase />
	},
	{
		key: 'candidate',
		label: 'Candidate',
		path: '/candidates',
		icon: <HiOutlineUsers />
	},
	{
		key: 'pending',
		label: 'Pending',
		path: '/pending',
		icon: <HiMail />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
