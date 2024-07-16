import { MdChevronRight } from 'react-icons/md'

interface CategoryItemProps {
    text: string
    noIcon?: boolean
    isActive?: boolean
    value?: number
    onClick?: (id: string) => void
}

function CategoryItem({ text, noIcon, isActive, value, onClick }: CategoryItemProps) {
    return (
        <div className={isActive ? 'text-cyan font-bold w-full' : 'text-black w-full'}>
            <li
                onClick={() => {
                    if (onClick && value) onClick(value.toString())
                }}
                className={`flex justify-between items-center p-2 w-full rounded-md hover:bg-lightergray`}
            >
                <p>{text}</p>
                {noIcon ? null : <MdChevronRight />}
            </li>
        </div>
    )
}

export default CategoryItem
