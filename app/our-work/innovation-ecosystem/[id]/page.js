'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import { ecoSystems } from '@/data/innovationEcosystems'
import InnovationDetailsBanner from '@/components/OurWork/InnovationEcosystem/InnovationDetailsBanner'
import CustomBreadcrumbs from '@/components/Shared/CustomBreadcrumbs'

const Page = () => {
    const [item, setItem] = useState({});
    const { id } = useParams()

    useEffect(() => {
        // Parse ID (since route params are strings)
        const matchedItem = ecoSystems.find(item => item.id === Number(id))

        if (matchedItem) {
            setItem(matchedItem)
            console.log(matchedItem)
        } else {
            console.warn('No matching item found for id:', id)
        }
    }, [id])

    return (
        <div>
            <InnovationDetailsBanner />
            <CustomBreadcrumbs
                rootRoute={'Home / Our Work / Building Innovation Ecosystem'}
                subRoute={item.name}
            />
        </div>
    )
}

export default Page
