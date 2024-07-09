import Tabs from '@/components/product/Tabs'
import StoreInfo from '@/components/StoreInfo'
import StoreLocation from '@/components/StoreLocation'
import { useState } from 'react'

function SettingPage() {
    const [activeTab, setActiveTab] = useState<string>('Informasi')

    function onTabChange(activeTab: string) {
        setActiveTab(activeTab)
    }

    return (
        <div className="w-full h-full bg-lightGray p-8">
            {/* Store Setting */}
            <div className="flex flex-col gap-4 w-full bg-white rounded-lg p-8">
                <h1 className="text-black text-xl font-bold">React Store</h1>
                <Tabs
                    firstTab="Informasi"
                    secondTab="Lokasi"
                    thirdTab="Template Pesan"
                    onTabChange={onTabChange}
                />
                {activeTab === 'Informasi' ? (
                    <StoreInfo />
                ) : activeTab === 'Lokasi' ? (
                    <StoreLocation />
                ) : (
                    <h1>{activeTab}</h1>
                )}
            </div>
        </div>
    )
}

export default SettingPage
