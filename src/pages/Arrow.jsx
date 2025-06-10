import { FaArrowUp} from "react-icons/fa";

export default function Arrow({onClick}){
    return(
        <div onClick={onClick} className="fixed bottom-5 right-5 cursor-pointer text-4xl rounded-full p-2 bg-[LightBlue] z-50 hover:bg-blue-300">
            <FaArrowUp className="text-[DodgerBlue]"/>
        </div>
    )
}