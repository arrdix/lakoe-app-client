import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardSide from './CardSide'
import { ProductType } from '@/dummy/productDummy'
import { useEffect, useState } from 'react'
import { useProductCheckedContext } from '@/context/checkedProductContext'
import { Product } from '@/types/ProductType'
import { Variant } from '@/types/VariantType'
import { VariantOption } from '@/types/VariantOptionType'
import { VariantOptionValue } from '@/types/VariantOptionValueType'

interface CardProductProps {
    realProduct: Product
    product?: ProductType | Product
    isCheckedDefault: boolean
    onCheckedChanges: () => void
}

export default function CardProduct({
    realProduct,
    product,
    isCheckedDefault,
    onCheckedChanges,
}: CardProductProps) {
    const [isChecked, setIsChecked] = useState<boolean>(isCheckedDefault)
    const { id, setProductIdChecked } = useProductCheckedContext()

    // useEffect(() => {
    //     onCheckedChanges()
    // }, [isChecked])

    // useEffect(() => {
    //     setIsChecked(isCheckedDefault)
    //     let listIdChecked = id

    //     if (isCheckedDefault === true) {
    //         if (isChecked) {
    //             const index = listIdChecked.indexOf(product.id)
    //             if (index !== -1) {
    //                 listIdChecked.splice(index, 1)
    //             }
    //         } else {
    //             const isProductInArray = listIdChecked.some((id) => id == product.id)
    //             if (!isProductInArray) {
    //                 listIdChecked.push(product.id)
    //             }
    //         }
    //     } else {
    //         listIdChecked = []
    //     }

    //     setProductIdChecked(listIdChecked)
    // }, [isCheckedDefault])

    // useEffect(() => {
    //     setIsChecked(isCheckedDefault)
    // }, [])

    // function onCheckedChange() {
    //     setIsChecked(!isChecked)
    //     const listIdChecked = id

    //     if (isChecked) {
    //         const index = listIdChecked.indexOf(product.id)
    //         if (index !== -1) {
    //             listIdChecked.splice(index, 1)
    //         }
    //     } else {
    //         const isProductInArray = listIdChecked.some((id) => id == product.id)
    //         if (!isProductInArray) {
    //             listIdChecked.push(product.id)
    //         }
    //     }

    //     setProductIdChecked(listIdChecked)
    // }

    const [variant, setVariant] = useState<Variant | null>(null)
    const [variantOption, setVariantOption] = useState<VariantOption | null>(null)
    const [variantOptionValue, setVariantOptionValue] = useState<VariantOptionValue | null>(null)

    useEffect(() => {
        setVariant((realProduct.variant && realProduct.variant) || null)
        setVariantOption((realProduct.variant && realProduct.variant.variantOption) || null)
        setVariantOptionValue(
            (realProduct.variant &&
                realProduct.variant.variantOption &&
                realProduct.variant.variantOption.variantOptionValue) ||
                null
        )
    }, [])

    useEffect(() => {
        onCheckedChanges()
    }, [isChecked])

    useEffect(() => {
        setIsChecked(isCheckedDefault)
        let listIdChecked = id

        if (isCheckedDefault === true) {
            if (isChecked) {
                const index = listIdChecked.indexOf(realProduct.id)
                if (index !== -1) {
                    listIdChecked.splice(index, 1)
                }
            } else {
                const isProductInArray = listIdChecked.some((id) => id == realProduct.id)
                if (!isProductInArray) {
                    listIdChecked.push(realProduct.id)
                }
            }
        } else {
            listIdChecked = []
        }

        setProductIdChecked(listIdChecked)
    }, [isCheckedDefault])

    useEffect(() => {
        setIsChecked(isCheckedDefault)
    }, [])

    function onCheckedChange() {
        setIsChecked(!isChecked)
        const listIdChecked = id

        if (isChecked) {
            const index = listIdChecked.indexOf(realProduct.id)
            if (index !== -1) {
                listIdChecked.splice(index, 1)
            }
        } else {
            const isProductInArray = listIdChecked.some((id) => id == realProduct.id)
            if (!isProductInArray) {
                listIdChecked.push(realProduct.id)
            }
        }

        setProductIdChecked(listIdChecked)
    }

    console.log('PRODUCT:', realProduct)
    console.log('VARIANT:', variant)
    console.log('VARIANT OPTION', variantOption)
    console.log('VARIANT OPTION VALUE', variantOptionValue)

    return (
        <div className="flex flex-row gap-6 rounded-md shadow p-3 w-full">
            {/* <img className="w-32 h-24" src={product.imageUrl} alt="" />
            <div className="flex flex-col gap-1 w-full">
                <CardHeader text={product.NameProduct} />
                <CardBody price={product.price} stock={20} sku={product.SKU}></CardBody>
                <CardFooter productName={product.NameProduct} />
            </div>
            <div>
                <CardSide
                    productName={product.NameProduct}
                    isActive={product.status}
                    isChecked={isChecked}
                    onCheckedChange={onCheckedChange}
                />
            </div> */}
        </div>
    )
}
