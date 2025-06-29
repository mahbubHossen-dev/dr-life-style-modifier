'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { accordionData } from "@/data/data";

export default function FaqAccordion() {
    return (
        <div className="pt-24">
            <div className="w-full max-w-3xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-400">জরুরী প্রশ্নের উত্তর
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {accordionData.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-gray-700 dark:text-gray-400">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base dark:text-gray-300">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
