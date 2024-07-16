import { FaCircleDot } from 'react-icons/fa6'

interface AlertOrderProps {
    status?: string
    date?: string
}

export default function AlertOrder({ status, date }: AlertOrderProps) {
    const isProcessed = status?.toLowerCase().includes('delivered');

    return (
        <div>
            <div className="rounded flex flex-row gap-3 py-2.5 px-3 h-full">
                <div className="my-auto flex items-center justify-center">
                    {isProcessed ? (
                        <div className="flex items-center justify-center bg-cyan rounded-full w-5 h-5 relative">
                            <FaCircleDot className="text-blue-200 border-none w-5 h-5" />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center bg-gray rounded-full w-5 h-5 relative">
                            <FaCircleDot className="text-slate-100 border-none w-5 h-5" />
                        </div>
                    )}
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold text-xs">
                        {status}
                    </p>
                    <p className="text-gray text-xs">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}
