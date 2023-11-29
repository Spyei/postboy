import { MdKeyboardArrowDown } from "react-icons/md";

export default function Input() {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-neutral-800 flex items-center rounded-lg p-3 h-16 w-screen gap-3 rounded-r-none">
                <button className="flex gap-3 items-center justify-start">
                    <span className="text-green-400">GET</span>
                    <MdKeyboardArrowDown fill="#ffffff" />
                </button>
                <div className="flex-grow text-white">
                    <input placeholder="Enter a URL here" className="bg-transparent focus:outline-none w-full" type="text" />
                </div>
            </div>
            <div className="flex items-center">
                <button className="rounded-lg bg-green-500 h-16 px-6 rounded-l-none text-white font-semibold">
                    <span>Send</span>
                </button>
            </div>
        </div>
    )
}