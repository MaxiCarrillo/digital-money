"use client";

import { SearchIcon } from '@/shared/icons'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { useFilterPayments } from '../hooks/useFilterPayments';

export const PaymentFilter = () => {

    const { searchTerm, updateSearch } = useFilterPayments();

    const [search, setSearch] = useState<string | null>(searchTerm);

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') updateSearch(search);
    }

    return (
        <div className='relative w-full'>
            <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2' />
            <input
                type="search"
                placeholder='Buscá entre más de 5.000 empresas'
                className='w-full pl-9 shadow-md'
                value={search || ''}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleOnKeyDown}
            />
        </div>
    )
}
