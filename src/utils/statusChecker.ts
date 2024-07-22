const STATUS = {
    BELUM_DIBAYAR: 'Belum Dibayar',
    PESANAN_BARU: 'Pesanan Baru',
    SIAP_DIKIRIM: 'Siap Dikirim',
    DALAM_PENGIRIMAN: 'Dalam Pengiriman',
    PESANAN_SELESAI: 'Pesanan Selesai',
    DIBATALKAN: 'Dibatalkan',
}

function statusChecker(orderStatus: string) {
    switch (orderStatus) {
        case STATUS.BELUM_DIBAYAR:
            return {
                buttonText: 'Hubungi Pembeli',
                labelColor: 'bg-yellow-400',
            }
        case STATUS.PESANAN_BARU: {
            return {
                labelColor: 'bg-green-600 text-white',
                buttonText: 'Proses Pesanan',
            }
        }
        case STATUS.SIAP_DIKIRIM:
            return {
                labelColor: 'bg-blue-600 text-white',
                buttonText: 'Kabari Pembeli',
            }
        case STATUS.DALAM_PENGIRIMAN:
            return {
                labelColor: 'bg-orange-600 text-white',
                buttonText: 'Lihat Rincian Pengiriman',
            }
        case STATUS.PESANAN_SELESAI:
            return {
                labelColor: 'bg-lightGray',
                buttonText: 'Hubungi Pembeli',
            }
        case STATUS.DIBATALKAN:
            return {
                labelColor: 'bg-red-600 text-white',
                buttonText: 'Hubungi Pembeli',
            }
        default:
            return {
                labelColor: 'bg-gray-200',
                buttonText: 'Hubungi Pembeli',
            }
    }
}

export default statusChecker
