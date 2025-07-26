"use client"

import SearchIcon from '@/shared/icons/search'
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

interface SearchbarInputProps {
    url: string;
}

export const SearchbarInput: FC<SearchbarInputProps> = ({ url }) => {

    const router = useRouter();

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const searchTerm = event.currentTarget.value.trim();
            if (searchTerm) {
                router.push(`${url}?search=${encodeURIComponent(searchTerm)}`);
            }
        }
    }

    return (
        <div className='relative w-full'>
            <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2' />
            <input className='w-full pl-9' type="search" placeholder='Buscar en tu actividad' onKeyDown={onKeyDown} />
        </div>
    )
}
