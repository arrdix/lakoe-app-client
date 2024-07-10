import MessageTemplateBox from '@/components/MessageTemplateBox'
import MessageTemplateModal from '@/components/MessageTemplateModal'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

function StoreMessageTemplate() {
    const [renderModal, setRenderModal] = useState<boolean>(false)

    function onRenderModal() {
        setRenderModal((oldVal) => !oldVal)
    }

    function onModalClose() {
        setRenderModal(false)
    }

    return (
        <>
            <div className="flex justify-between items-center mt-2">
                <h2 className="text-black text-lg font-bold">Daftar Template Pesan</h2>
                <Button
                    className="bg-transparent text-black border border-lightgray hover:text-white"
                    onClick={onRenderModal}
                >
                    Buat Template
                </Button>
            </div>
            <MessageTemplateBox
                title="Pesan Pengiriman"
                message="Hai, kami dari Fesyen Store. Pesanan Anda telah dikirimkan dengan nomor resi
                    [Nomor Resi]. Anda dapat melacak pengiriman Anda melalui [Link Pelacakan].
                    Terima kasih telah berbelanja di toko kami!"
            />
            <MessageTemplateBox
                title="Pesan Promo"
                message="Hai! Fesyen Store sedang mengadakan promo spesial! 
                Dapatkan diskon [Persentase Diskon]% untuk pembelian di atas [Jumlah Minimum Pembelian]. 
                Segera kunjungi toko kami dan manfaatkan promo ini!"
            />
            <MessageTemplateBox
                title="Pesan Promo"
                message="Hai! Fesyen Store sedang mengadakan promo spesial! 
                Dapatkan diskon [Persentase Diskon]% untuk pembelian di atas [Jumlah Minimum Pembelian]. 
                Segera kunjungi toko kami dan manfaatkan promo ini!"
            />
            <MessageTemplateBox
                title="Pesan Promo"
                message="Hai! Fesyen Store sedang mengadakan promo spesial! 
                Dapatkan diskon [Persentase Diskon]% untuk pembelian di atas [Jumlah Minimum Pembelian]. 
                Segera kunjungi toko kami dan manfaatkan promo ini!"
            />
            <MessageTemplateBox
                title="Pesan Promo"
                message="Hai! Fesyen Store sedang mengadakan promo spesial! 
                Dapatkan diskon [Persentase Diskon]% untuk pembelian di atas [Jumlah Minimum Pembelian]. 
                Segera kunjungi toko kami dan manfaatkan promo ini!"
            />
            <MessageTemplateBox
                title="Pesan Promo"
                message="Hai! Fesyen Store sedang mengadakan promo spesial! 
                Dapatkan diskon [Persentase Diskon]% untuk pembelian di atas [Jumlah Minimum Pembelian]. 
                Segera kunjungi toko kami dan manfaatkan promo ini!"
            />
            {renderModal && (
                <MessageTemplateModal isOpen={renderModal} onModalClose={onModalClose} />
            )}
        </>
    )
}

export default StoreMessageTemplate
