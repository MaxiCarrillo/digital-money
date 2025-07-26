import { CheckIcon } from '@/shared/icons';
import React from 'react'

interface SuccessCardProps {
    message: string;
}

export const SuccessCard: React.FC<SuccessCardProps> = ({ message }) => {
    return (
        <article className='bg-accent p-8 rounded-lg shadow-md flex flex-col items-center gap-2 text-background'>
            <CheckIcon className='[&_path]:fill-background' />
            <h1 className='text-2xl font-bold'>{message}</h1>
        </article>
    )
}
