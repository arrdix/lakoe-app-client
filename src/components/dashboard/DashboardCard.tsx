interface DashboardCardProps {
    title: string
    value: number
    color: string
}

function DashboardCard({ title, value, color }: DashboardCardProps) {
    return (
        <div
            className={`relative flex flex-col text-white shadow bg-clip-border rounded-md w-96 ${color}`}
        >
            <div className="p-6 flex flex-col">
                <div className="flex flex-row">
                    <div className="h-full w-1 bg-white mx-2 self-stretch rounded"></div>
                    <div className="flex flex-col">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
                            {title}
                        </p>
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {value} Pesanan
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard
