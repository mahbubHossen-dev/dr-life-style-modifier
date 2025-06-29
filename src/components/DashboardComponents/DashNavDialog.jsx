
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

export function DashNavDialog() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <button variant="outline" className=" py-2 px-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white rounded">Homa IR Test</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>HOMA2 Calculator</DialogTitle>
                        
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <label htmlFor="calculator">Fasting Calculator</label>
                            <input className="border p-2" type="text" id="calculator" name="calculator" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <label htmlFor="insulin">Fasting Insulin</label>
                            <input className="border p-2" type="text" id="insulin" name="insulin" defaultValue="@peduarte" />
                        </div>
                    </div>
                    <DialogFooter>
                        
                        <button type="submit" className=" py-2 px-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white rounded">Submit</button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
