import CategoryItem from '@/components/product/CategoryItem'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { useState } from 'react'
import { FieldError, UseFormSetValue } from 'react-hook-form'
import { CreateProductDto } from '@/dtos/ProductDto'

interface SelectCategoryProps {
    setValue: UseFormSetValue<CreateProductDto>,
    error: FieldError | undefined
}

function SelectCategory({ setValue, error }: SelectCategoryProps) {
    const [renderCategories, setrenderCategories] = useState<boolean>(false)
    const [selectedCategory, setSelectedCategory] = useState<string>('Kategori Produk')

    function onrenderCategories() {
        setrenderCategories(!renderCategories)
    }

    function onSelectCategory(id: string) {
        setValue('categoryId', id)
        setSelectedCategory('Pakaian Pria / Atasan / Kaos')
    }

    return (
        <>
            <label htmlFor="productCategory" className="text-sm">
                Kategori <span className="text-red-500">*</span>
            </label>
            <button
                className="flex justify-between items-center border-2 border-gray-200 rounded-md h-10 px-2 text-sm w-full relative"
                onClick={onrenderCategories}
            >
                <p className={selectedCategory === 'Kategori Produk' ? `text-gray` : `text-black`}>
                    {selectedCategory}
                </p>
                {renderCategories ? <FaChevronUp /> : <FaChevronDown />}
                {renderCategories && (
                    <div className="absolute flex justify-start p-2 gap-2 top-10 left-0 bg-white border border-gray-200 w-full rounded-md">
                        <ul className="flex flex-col items-start w-full">
                            <CategoryItem text="Parent Category" />
                            <CategoryItem text="Parent Category" isActive />
                            <CategoryItem text="Parent Category" />
                            <CategoryItem text="Parent Category" />
                            <CategoryItem text="Parent Category" />
                        </ul>
                        <ul className="flex flex-col items-start border-x border-gray-200 px-2 w-full">
                            <CategoryItem text="Child Category" />
                            <CategoryItem text="Child Category" />
                            <CategoryItem text="Child Category" isActive />
                            <CategoryItem text="Child Category" />
                            <CategoryItem text="Child Category" />
                        </ul>
                        <ul className="flex flex-col items-start w-full">
                            <CategoryItem
                                text="Descendant Category"
                                value={666}
                                onClick={onSelectCategory}
                                noIcon
                            />
                            <CategoryItem
                                text="Descendant Category"
                                value={666}
                                onClick={onSelectCategory}
                                noIcon
                            />
                            <CategoryItem
                                text="Descendant Category"
                                value={666}
                                onClick={onSelectCategory}
                                noIcon
                            />
                            <CategoryItem
                                text="Descendant Category"
                                value={666}
                                onClick={onSelectCategory}
                                noIcon
                                isActive
                            />
                            <CategoryItem
                                text="Descendant Category"
                                value={666}
                                onClick={onSelectCategory}
                                noIcon
                            />
                        </ul>
                    </div>
                )}
            </button>
            <div>
                {error && <span className="text-error">{error.message}</span>}
            </div>
        </>
    )
}

export default SelectCategory
