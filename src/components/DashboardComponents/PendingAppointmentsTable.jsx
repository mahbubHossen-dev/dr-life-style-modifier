import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { diagnosisData, pendingAppoinmentsData } from '@/data/data'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from 'react-icons/md';



export default function PendingAppointmentsTable() {
    return (
        <Table className='mt-12'>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow className='xl:text-xl'>
                    <TableHead>Patient Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            {
                pendingAppoinmentsData.map(appointment => (
                    <TableBody key={appointment.id}>
                        <TableRow className='xl:text-lg'>
                            <TableCell className="font-medium">{appointment.patientName}</TableCell>
                            <TableCell>{appointment.date}</TableCell>
                            <TableCell>{appointment.time}</TableCell>
                            <TableCell>{appointment.status}</TableCell>
                            <TableCell className='space-x-3'>
                                <button><CiEdit className='text-2xl' /></button>
                                <button><MdDelete className='text-2xl' /></button>
                            </TableCell>

                        </TableRow>
                    </TableBody>
                ))
            }
        </Table>
    )
}
