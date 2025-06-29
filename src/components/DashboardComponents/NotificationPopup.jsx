
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaEye } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
export default function NotificationPopup() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IoIosNotifications className='text-[28px]' />
      </PopoverTrigger>
      <PopoverContent className="w-70 ">
        <div className="text-center">
            <p>There aro no more notification</p>
            <button className="mt-2 flex mx-auto gap-1 place-items-center"><FaEye className="text-xl"/> View All</button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
