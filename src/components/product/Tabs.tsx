import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface TabsProps {
    firstTab: string
    secondTab: string
    thirdTab: string
}

export default function Tabs({ firstTab, secondTab, thirdTab }: TabsProps) {
    const [buttonActive, setButtonActive] = useState<string>(firstTab)

    return (
        <div className="flex gap-8 w-full border-b-2 border-gray-100">
            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${
                        buttonActive === firstTab ? 'text-cyan' : 'text-black'
                    }`}
                    onClick={() => setButtonActive(firstTab)}
                >
                    {firstTab}
                </Button>
                {buttonActive === firstTab && (
                    <div className="w-full bg-cyan h-1 rounded-full w-"></div>
                )}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${
                        buttonActive === secondTab ? 'text-cyan' : 'text-black'
                    }`}
                    onClick={() => setButtonActive(secondTab)}
                >
                    {secondTab}
                </Button>
                {buttonActive === secondTab && (
                    <div className="w-full bg-cyan h-1 rounded-full"></div>
                )}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${
                        buttonActive === thirdTab ? 'text-cyan' : 'text-black'
                    }`}
                    onClick={() => setButtonActive(thirdTab)}
                >
                    {thirdTab}
                </Button>
                {buttonActive === thirdTab && (
                    <div className="w-full bg-cyan h-1 rounded-full"></div>
                )}
            </div>
        </div>
    )
}
