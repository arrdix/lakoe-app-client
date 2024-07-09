import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

interface TabsProps {
    firstTab: string
    secondTab: string
    thirdTab: string
    onTabChange: (activeTab: string) => void
}

export default function Tabs({ firstTab, secondTab, thirdTab, onTabChange }: TabsProps) {
    const [activeTab, setActiveTab] = useState<string>(firstTab)

    useEffect(() => {
        onTabChange(activeTab)
    }, [activeTab])

    return (
        <div className="flex gap-8 w-full border-b-2 border-gray-100">
            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${
                        activeTab === firstTab ? 'text-cyan' : 'text-black'
                    }`}
                    onClick={() => setActiveTab(firstTab)}
                >
                    {firstTab}
                </Button>
                {activeTab === firstTab && (
                    <div className="w-full bg-cyan h-1 rounded-full w-"></div>
                )}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${
                        activeTab === secondTab ? 'text-cyan' : 'text-black'
                    }`}
                    onClick={() => setActiveTab(secondTab)}
                >
                    {secondTab}
                </Button>
                {activeTab === secondTab && <div className="w-full bg-cyan h-1 rounded-full"></div>}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${
                        activeTab === thirdTab ? 'text-cyan' : 'text-black'
                    }`}
                    onClick={() => setActiveTab(thirdTab)}
                >
                    {thirdTab}
                </Button>
                {activeTab === thirdTab && <div className="w-full bg-cyan h-1 rounded-full"></div>}
            </div>
        </div>
    )
}
