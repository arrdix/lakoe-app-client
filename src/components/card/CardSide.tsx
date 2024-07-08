import { Checkbox } from "../ui/checkbox"

export default function CardSide() {
    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="pt-1">
                <Checkbox />
            </div>
            <div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-800  "></div>
                </label>
            </div>
        </div>
    )
}
