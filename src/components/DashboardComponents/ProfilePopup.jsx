
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaEye } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


export default function ProfilePopup() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <CgProfile className='text-[28px] cursor-pointer' />
      </PopoverTrigger>
      <PopoverContent className="w-65">
        <div className="">
            <div>
                <p className="text-xl">Tarik Sk</p>
             <p>mahbubhossen172@gmail.com</p>
            </div>
            <ul className="mt-2">
                <li>Dashboard</li>
                <li>Setting</li>
                <li>Logout</li>
            </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}
