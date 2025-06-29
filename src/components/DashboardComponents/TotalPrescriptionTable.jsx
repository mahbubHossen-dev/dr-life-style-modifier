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
import { prescriptionData } from '@/data/data'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from 'react-icons/md';

export default function TotalPrescriptionTable() {
    return (
        <Table className='mt-12'>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow className='xl:text-xl'>
                    <TableHead>Patient Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Diagnosis</TableHead>
                    <TableHead>Medicines</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            {
                prescriptionData.map(prescription => (
                    <TableBody key={prescription.id}>
                        <TableRow className='xl:text-lg'>
                            <TableCell className="font-medium">{prescription.patientName}</TableCell>
                            <TableCell>{prescription.age}</TableCell>
                            <TableCell>{prescription.diagnosis}</TableCell>
                            <TableCell>{prescription.medicines}</TableCell>
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
