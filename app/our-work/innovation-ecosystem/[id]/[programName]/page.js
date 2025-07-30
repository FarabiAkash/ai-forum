'use client'
import ProgramDescription from "@/components/OurWork/InnovationEcosystem/ProgramDescription";
import ProgramDetailsBanner from "@/components/OurWork/InnovationEcosystem/ProgramDetailsBanner"
import CustomBreadcrumbs from "@/components/Shared/CustomBreadcrumbs";
import { ecoSystems, programs } from "@/data/innovationEcosystems";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

const page = () => {
    const [item, setItem] = useState({});
    const { id } = useParams()

    useEffect(() => {
        // Parse ID (since route params are strings)
        const matchedItem = programs.find(item => item.id === Number(id))

        if (matchedItem) {
            setItem(matchedItem)
        } else {
            console.warn('No matching item found for id:', id)
        }
    }, [id])
    console.log(item)
    return (
        <div className="bg-[#FAFAFA]">
            <ProgramDetailsBanner
                item={item}
            />
            <CustomBreadcrumbs
                rootRoute={'Home / Our Work / Building Innovation Ecosystem'}
                subRoute={item.programTitle}
            />
            <ProgramDescription />
        </div>
    )
}
export default page