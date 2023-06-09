// import './aside.css';
import { BiAddToQueue, BiComment, BiTrashAlt } from "react-icons/bi";
export default () => {
    return (
        <aside className="fixed left-0 w-80 h-screen bg-gray-900">
        <div className="text-gray-50 flex flex-col items-center py-3 gap-5">

            <button className="border rounded-md border-gray-600 w-4/5 hover:bg-indigo-600">
                <span className="block py-3"><BiAddToQueue className="inline" size={20} /> New Chat</span>
            </button>
        </div>
        <div className="chat_list w-full flex flex-col gap-4 px-3 py-2">
            <div className="w-full border-0 rounded-md bg-gray-800 py-1 px-3 flex justify-center items-center">
                <button className="text-left truncate w-full active:bg-violet-700">
                    <span className="block py-3 text-gray-50">
                        <BiComment className="inline mx-2" size={20}/>
                        Room 1
                    </span>
                </button>
                <button className="bg-gradient-to-l from-gray-800 py-2 px-3 hover:text-indigo-400">
                    <BiTrashAlt/>
                </button>
            </div>
        </div>
        <div className="chat_list w-full flex flex-col gap-4 px-3 py-5">
            <div className="w-full border-0 rounded-md bg-gray-800 py-1 px-3 flex justify-center items-center">
                <button className="text-left truncate w-full active:bg-violet-700">
                    <span className="block py-3 text-gray-50">
                        <BiComment className="inline mx-2" size={20}/>
                        Room 2
                    </span>
                </button>
                <button className="bg-gradient-to-l from-gray-800 py-2 px-3 hover:text-indigo-400">
                    <BiTrashAlt/>
                </button>
            </div>
        </div>
        <div className="chat_list w-full flex flex-col gap-4 px-3 py-5">
            <div className="w-full border-0 rounded-md bg-gray-800 py-1 px-3 flex justify-center items-center">
                <button className="text-left truncate w-full active:bg-violet-700">
                    <span className="block py-3 text-gray-50">
                        <BiComment className="inline mx-2" size={20}/>
                        Room 3
                    </span>
                </button>
                <button className="bg-gradient-to-l from-gray-800 py-4 px-3 hover:text-indigo-400">
                    <BiTrashAlt/>
                </button>
            </div>
        </div>
    </aside>
    )
}