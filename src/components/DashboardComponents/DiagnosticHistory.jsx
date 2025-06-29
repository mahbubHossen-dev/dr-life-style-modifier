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
import { diagnosisData } from '@/data/data'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from 'react-icons/md';



export default function DiagnosticHistory() {
    return (
        <Table className='mt-12'>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow className='xl:text-xl'>
                    <TableHead>Patient Name</TableHead>
                    <TableHead>Diagnosis Date</TableHead>
                    <TableHead>Condition</TableHead>
                    <TableHead>Prescribed</TableHead>
                    <TableHead>Actions</TableHead>

                </TableRow>
            </TableHeader>
            {
                diagnosisData.map(diagnostic => (
                    <TableBody key={diagnostic.id}>
                        <TableRow className='xl:text-lg'>
                            <TableCell className="font-medium">{diagnostic.patientName}</TableCell>
                            <TableCell>{diagnostic.diagnosisDate}</TableCell>
                            <TableCell>{diagnostic.condition}</TableCell>
                            <TableCell>{diagnostic.prescribedBy}</TableCell>
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
