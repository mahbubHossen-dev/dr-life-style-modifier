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
import { diagnosisData, totalPatient } from '@/data/data'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from 'react-icons/md';



export default function TotalPatient() {
    return (
        <Table className='mt-12'>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow className='xl:text-xl'>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Registered Date</TableHead>
                    <TableHead>Actions</TableHead>

                </TableRow>
            </TableHeader>
            {
                totalPatient.map(patient => (
                    <TableBody key={patient.id}>
                        <TableRow className='xl:text-lg'>
                            <TableCell className="font-medium">{patient.name}</TableCell>
                            <TableCell>{patient.age}</TableCell>
                            <TableCell>{patient.gender}</TableCell>
                            <TableCell>{patient.phone}</TableCell>
                            <TableCell>{patient.registeredDate}</TableCell>
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
