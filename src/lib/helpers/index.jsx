export function getTaskStatus(status) {
    switch (status) {
        case 'Done':
            return <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">{status}</span>
        case 'In Progress':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">{status}</span>
            )
        default:
            return <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">{status}</span>
    }
}
