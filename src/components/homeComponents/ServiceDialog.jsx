
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function ServiceDialog({service}) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <button className='px-5 pb-10 text-blue-600 font-semibold'>View Details</button>
                    
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] md:max-w-md">
                    <DialogHeader>
                        <DialogTitle>HOMA2 Calculator</DialogTitle>
                        
                    </DialogHeader>
                    <div className="">
                        <p>{service.description}</p>
                    </div>
                    <DialogFooter>
                        <button type="submit" className=" py-2 px-4 border rounded">Cancel</button>
                        <button type="submit" className=" py-2 px-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white rounded">Submit</button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
