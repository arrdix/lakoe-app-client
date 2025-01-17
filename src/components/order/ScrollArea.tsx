import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface ScrollAreaProps {
    allTab: string;
    firstTab: string;
    secondTab: string;
    thirdTab: string;
    fourthTab: string;
    fifthTab: string;
    sixthTab: string;
    onTabChange: (activeTab: string) => void;
    allTabLength: number;
    firstTabLength: number;
    secondTabLength: number;
    thirdTabLength: number;
    fourthTabLength: number;
    fifthTabLength: number;
    sixthTabLength: number;
}

export default function ScrollArea({
    allTab,
    firstTab,
    secondTab,
    thirdTab,
    fourthTab,
    fifthTab,
    sixthTab,
    onTabChange,
    allTabLength,
    firstTabLength,
    secondTabLength,
    thirdTabLength,
    fourthTabLength,
    fifthTabLength,
    sixthTabLength
}: ScrollAreaProps) {
    const [activeTab, setActiveTab] = useState<string>(allTab);

    useEffect(() => {
        onTabChange(activeTab);
    }, [activeTab]);

    return (
        <div className="flex gap-8 w-full border-b border-gray-100 overflow-x-auto scrollbar-hide">
            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${activeTab === allTab ? 'text-cyan' : 'text-black'}`}
                    onClick={() => setActiveTab(allTab)}
                >
                    <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2 text-xs">{allTabLength}</span>
                    {allTab}
                </Button>
                {activeTab === allTab && (
                    <div className="w-full bg-cyan h-1 rounded-full"></div>
                )}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${activeTab === firstTab ? 'text-cyan' : 'text-black'}`}
                    onClick={() => setActiveTab(firstTab)}
                >
                    <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2 text-xs">{firstTabLength}</span>
                    {firstTab}
                </Button>
                {activeTab === firstTab && (
                    <div className="w-full bg-cyan h-1 rounded-full"></div>
                )}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${activeTab === secondTab ? 'text-cyan' : 'text-black'}`}
                    onClick={() => setActiveTab(secondTab)}
                >
                    <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2 text-xs">{secondTabLength}</span>
                    {secondTab}
                </Button>
                {activeTab === secondTab && (
                    <div className="w-full bg-cyan h-1 rounded-full"></div>
                )}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${activeTab === thirdTab ? 'text-cyan' : 'text-black'}`}
                    onClick={() => setActiveTab(thirdTab)}
                >
                    <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2 text-xs">{thirdTabLength}</span>
                    {thirdTab}
                </Button>
                {activeTab === thirdTab && (
                    <div className="w-full bg-cyan h-1 rounded-full"></div>
                )}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${activeTab === fourthTab ? 'text-cyan' : 'text-black'}`}
                    onClick={() => setActiveTab(fourthTab)}
                >
                    <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2 text-xs">{fourthTabLength}</span>
                    {fourthTab}
                </Button>
                {activeTab === fourthTab && (
                    <div className="w-full bg-cyan h-1 rounded-full"></div>
                )}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${activeTab === fifthTab ? 'text-cyan' : 'text-black'}`}
                    onClick={() => setActiveTab(fifthTab)}
                >
                    <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2 text-xs">{fifthTabLength}</span>
                    {fifthTab}
                </Button>
                {activeTab === fifthTab && (
                    <div className="w-full bg-cyan h-1 rounded-full"></div>
                )}
            </div>

            <div className="w-auto flex flex-col">
                <Button
                    className={`bg-white rounded-none hover:bg-white p-0 ${activeTab === sixthTab ? 'text-cyan' : 'text-black'}`}
                    onClick={() => setActiveTab(sixthTab)}
                >
                    <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2 text-xs">{sixthTabLength}</span>
                    {sixthTab}
                </Button>
                {activeTab === sixthTab && (
                    <div className="w-full bg-cyan h-1 rounded-full"></div>
                )}
            </div>
        </div>
    );
}
