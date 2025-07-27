"use client"

import { SearchIcon } from '@/shared/icons'
import FilterIcon from '@/shared/icons/filter'
import { useEffect, useState } from 'react'
import { useFilterActivity } from '../hooks/use-filter-activity'
import { PeriodFilter } from './period-filter'

export const ActivityFilter = () => {

    const { filters, updateSearch } = useFilterActivity();
    const [searchTerm, setSearchTerm] = useState<string | null>(filters.search);
    const [openFilter, setOpenFilter] = useState(false);

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') updateSearch(searchTerm);
    }

    useEffect(() => {
        setSearchTerm(filters.search);
    }, [filters.search]);

    return (
        <div className='flex items-center gap-4 w-full'>
            <div className='relative w-full'>
                <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2' />
                <input
                    type="search"
                    placeholder='Buscar en tu actividad'
                    className='w-full pl-9 shadow-md'
                    value={searchTerm || ''}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleOnKeyDown}
                />
            </div>
            <div className='hidden sm:block relative'>
                <button className='hidden sm:flex button py-3 shadow-md gap-8 items-center' onClick={() => setOpenFilter(!openFilter)}>
                    Filtrar <FilterIcon width={16} height={16} />
                </button>
                {
                    openFilter && <PeriodFilter />
                }
            </div>
        </div>
    )
}
