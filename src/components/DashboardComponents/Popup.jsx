'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PiDotsNineBold } from "react-icons/pi";
import { FaRegCopy } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { createSwapy } from "swapy";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { FaDiagnoses, FaPrescriptionBottle } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { MdGroups, MdMedicalServices, MdVideoLibrary } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { SiStagetimer } from "react-icons/si";

export default function Popup() {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const timeout = setTimeout(() => {
      if (!containerRef.current) return;

      const swapy = createSwapy(containerRef.current, {
        animation: "dynamic",
      });

      swapy.onSwap((e) => {
        console.log("Swapped:", e);
      });

      return () => {
        swapy.destroy();
      };
    }, 0);

    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="cursor-pointer p-2">
          <PiDotsNineBold className="text-[28px]" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <p className="text-center font-semibold mb-4">Quick Access</p>

        <div
          ref={containerRef}
          className="grid grid-cols-3 gap-4"
        >
          
          <div className="slot" data-swapy-slot="1">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="1">
              <FaRegCopy className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Software Version</p>
            </div>
          </div>

          <div className="slot" data-swapy-slot="2">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="2">
              <img width="30" height="30" src="https://img.icons8.com/ios/50/tear-off-calendar--v1.png" alt="tear-off-calendar--v1" className="mx-auto"/>
              <p className="text-gray-700 text-sm mt-1">Book Appointment</p>
            </div>
          </div>

          <div className="slot" data-swapy-slot="3">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="3">
              <FaPrescriptionBottleMedical className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Prescription Data Add</p>
            </div>
          </div>

          <div className="slot" data-swapy-slot="4">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="4">
              <FaDiagnoses className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Diagnosis Test Add</p>
            </div>
          </div>

          <div className="slot" data-swapy-slot="5">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="5">
              <FaPrescriptionBottle className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Homa IR</p>
            </div>
          </div>

          <div className="slot" data-swapy-slot="6">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="6">
              <FaPrescriptionBottle className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Diagnosis Report Add</p>
            </div>
          </div>

          <div className="slot" data-swapy-slot="7">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="7">
              <GiMedicines className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Add Supplements</p>
            </div>
          </div>

          <div className="slot" data-swapy-slot="8">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="8">
              <MdGroups className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Add User</p>
            </div>
          </div>

          <div className="slot" data-swapy-slot="9">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="9">
              <MdMedicalServices className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Add Service</p>
            </div>
          </div>
          <div className="slot" data-swapy-slot="10">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="10">
              <MdVideoLibrary className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Add Video</p>
            </div>
          </div>
          <div className="slot" data-swapy-slot="11">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="11">
              <IoCreateSharp className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Create Appointment</p>
            </div>
          </div>
          <div className="slot" data-swapy-slot="12">
            <div className="item cursor-grab active:cursor-grabbing select-none text-center p-2 hover:dark:bg-gray-100 rounded-md w-full" data-swapy-item="12">
              <SiStagetimer className="text-2xl mx-auto" />
              <p className="text-gray-700 text-sm mt-1">Patient Delete Timer</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
