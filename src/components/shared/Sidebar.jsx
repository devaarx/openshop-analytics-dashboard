import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className="w-60  flex flex-col text-white" style={{ backgroundColor: '#33084c' }}>
            <div
                className="w-60 flex flex-col justify-center items-center text-white"
                style={{ backgroundColor: '#33084c' }}
            >
                <div
                    className="mb-6 px-2 py-3 w-full flex justify-center items-center"
                    style={{ backgroundColor: '#451e5c' }}
                >
                    <span
                        className="text-neutral-100"
                        style={{
                            color: 'white',
                            fontSize: 24,
                            fontFamily: 'Inter',
                            fontWeight: '600',
                            lineHeight: '32px',
                            wordWrap: 'break-word'
                        }}
                    >
                        Acmy Solutions
                    </span>
                </div>
            </div>

            <div className="py-8 p-2 flex flex-1 flex-col gap-0.5">
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
        <Link
            to={link.path}
            className={classNames(
                pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
                'rounded-full flex justify-left',
                linkClass
            )}
            style={{ backgroundColor: '#451e5c' }}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}
