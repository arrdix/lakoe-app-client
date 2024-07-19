import React from 'react'
// import { useLocation } from 'react-router-dom';
import ContactInformation from '@/components/buyer/ContactInformation'
import InsertVoucherModal from '@/components/buyer/InsertVoucherModal'
import Note from '@/components/buyer/Note'
import DeliveryMethods from '@/components/buyer/DeliveryMethods'
import ShippingAddress from '@/components/buyer/ShippingAddress'
import { Button } from '@/components/ui/button'
import { FaArrowRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { CheckoutDto } from '@/dtos/CheckoutDto'
import { CreateOrderDto } from '@/dtos/OrderDto'
import axios from 'axios'
import PaymentSummary from '@/components/buyer/PaymentSummary'
import { useLocation } from 'react-router-dom'

function CheckoutPage() {
    const hookForm = useForm<CreateOrderDto>()
    const hookForm2 = useForm<CheckoutDto>()
    const { setValue } = hookForm

    setValue('invoiceNumber', '121233')
    setValue('serviceCharge', 300)
    setValue('receiverLatitude', 1)
    setValue('receiverLongtitude', 3)
    setValue('status', 'ini status')
    setValue('price', 3000)

    const onCheckout = async (data: CreateOrderDto) => {
        try {
            console.log(data)
            // const response = await axios.post('http://localhost:3000/order', data)
            // return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    const { handleSubmit } = hookForm

    const location = useLocation()
    const { state } = location

    return (
        <div className=" w-4/5 h-full bg-white px-8 py-8 mt-8">
            <div className="flex gap-10">
                <div className="flex flex-col gap-2 w-4/6">
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-4xl">Checkout</h1>
                        <img className="w-16 mb-3" src="Add to Cart-amico.png" alt="icon" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <ContactInformation hookForm={hookForm} />
                        <ShippingAddress hookForm={hookForm} />
                        <DeliveryMethods hookForm={hookForm2} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-2/6 relative top-6">
                    {/* <PaymentSummar2/> */}
                    <PaymentSummary
                        skus={state.orderedProduct.skus}
                        qty={state.orderedProduct.qty}
                    />

                    <InsertVoucherModal />
                    <Note hookForm={hookForm} />
                    <Button
                        type="button"
                        className="rounded-lg p-1 border=none bg-cyan px-14 py-6 w-full"
                        onClick={handleSubmit((data) => {
                            onCheckout(data)
                        })}
                    >
                        <p className="mx-2 text-md font-semibold">Bayar sekarang</p>
                        <FaArrowRight size={20} className="text-white mr-2" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
