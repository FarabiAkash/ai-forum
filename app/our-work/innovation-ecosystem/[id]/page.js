'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import { ecoSystems } from '@/data/innovationEcosystems'
import InnovationDetailsBanner from '@/components/OurWork/InnovationEcosystem/InnovationDetailsBanner'

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
        </div>
    )
}

export default Page
