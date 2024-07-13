const STATUS = {
    BELUM_DIBAYAR: 'BELUM DIBAYAR',
    PESANAN_BARU: 'PESANAN BARU',
    SIAP_DIKIRIM: 'SIAP DIKIRIM',
    DALAM_PENGIRIMAN: 'DALAM PENGIRIMAN',
    PESANAN_SELESAI: 'PESANAN SELESAI',
    DIBATALKAN: 'DIBATALKAN',
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
                labelColor: 'bg-green-600 buttonText-white',
                buttonText: 'Proses Pesanan',
            }
        }
        case STATUS.SIAP_DIKIRIM:
            return {
                labelColor: 'bg-blue-600 buttonText-white',
                buttonText: 'Kabari Pembeli',
            }
        case STATUS.DALAM_PENGIRIMAN:
            return {
                labelColor: 'bg-orange-600 buttonText-white',
                buttonText: 'Lihat Rincian Pengiriman',
            }
        case STATUS.PESANAN_SELESAI:
            return {
                labelColor: 'bg-lightGray',
                buttonText: 'Hubungi Pembeli',
            }
        case STATUS.DIBATALKAN:
            return {
                labelColor: 'bg-red-600 buttonText-white',
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
