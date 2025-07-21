'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import { ecoSystems } from '@/data/innovationEcosystems'
import InnovationDetailsBanner from '@/components/OurWork/InnovationEcosystem/InnovationDetailsBanner'
import CustomBreadcrumbs from '@/components/Shared/CustomBreadcrumbs'
import ProgramsContainer from '@/components/OurWork/InnovationEcosystem/ProgramsContainer'

const Page = () => {
    const [item, setItem] = useState({});
    const { id } = useParams()

    useEffect(() => {
        // Parse ID (since route params are strings)
        const matchedItem = ecoSystems.find(item => item.id === Number(id))

        if (matchedItem) {
            setItem(matchedItem)
        } else {
            console.warn('No matching item found for id:', id)
        }
    }, [id])
    console.log(item)
    return (
        <div>
            <InnovationDetailsBanner />
            <CustomBreadcrumbs
                rootRoute={'Home / Our Work / Building Innovation Ecosystem'}
                subRoute={item.name}
            />
            <ProgramsContainer programs={item.programs} />
        </div>
    )
}

export default Page
