import { formatAmount } from '@/shared/utils/formatAmount';
import Link from 'next/link';
import { FC } from 'react';

interface AccountInfoProps {
    available_amount: number;
}

export const AccountInfo: FC<AccountInfoProps> = ({ available_amount }) => {
    return (
        <article className='bg-background p-8 rounded-lg shadow-background/70 shadow-md text-foreground'>
            <div className='flex justify-end gap-4'>
                <Link href='/dashboard/cards' className="border-b text-xs sm:text-base">Ver tarjetas</Link>
                <Link href='/dashboard/profile' className="border-b text-xs sm:text-base">Ver CVU</Link>
            </div>
            <h2 className='sm:ml-4 my-3 font-medium text-base'>Dinero disponible</h2>
            <p className='w-fit font-bold border-2 border-accent px-4 py-2 rounded-full text-[calc(1rem+1vw)]'>{formatAmount(available_amount)}</p>
        </article>
    )
}
