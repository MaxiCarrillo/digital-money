import ArrowIcon from '@/shared/icons/arrow';
import CircleIcon from '@/shared/icons/circle';
import SearchIcon from '@/shared/icons/search';
import { formatAmount } from '@/shared/utils/formatAmount';
import { TransactionType } from '@/types'
import Link from 'next/link';
import React, { FC } from 'react'

interface ActivityInfoProps {
    transactions: TransactionType[];
}

export const ActivityInfo: FC<ActivityInfoProps> = ({ transactions }) => {
    return (
        <section className='space-y-3'>
            <div className='flex rounded-lg items-center bg-foreground pl-4 shadow-md'>
                <SearchIcon className='' />
                <input className='w-full bg-transparent ring-0' type="search" placeholder='Buscar en tu actividad' />
            </div>
            <section className='bg-foreground py-8 px-4 sm:px-8 rounded-lg shadow-md'>
                <h1 className='text-base pb-2 border-b-surface/30 border-b'>Tu actividad</h1>
                <ul>
                    {transactions.length > 0 ? transactions.map((transaction) => (
                        <li key={transaction.id} className='border-b border-b-surface/30 py-2 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <CircleIcon width={32} height={32} />
                                <p className='text-sm'>{transaction.description}</p>
                            </div>
                            <div className='text-right'>
                                <p>- {formatAmount(transaction.amount)}</p>
                                <p className='text-xs text-muted-foreground'>{transaction.dated}</p>
                            </div>
                        </li>
                    )) : (
                        <li className='border-b border-b-surface/30 py-2 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <CircleIcon width={32} height={32} className='[&_circle]:fill-surface/30' />
                                <p className='text-sm'>No se encontraron actividades</p>
                            </div>
                        </li>
                    )}
                </ul>
                <Link href='/dashboard/activity' className='mt-4 flex items-center justify-between font-bold hover:[&_svg]:translate-x-1  '>
                    <span className='text-sm'>Ver toda tu actividad</span>
                    <ArrowIcon className='[&_path]:fill-background transition' width={16} />
                </Link>
            </section>
        </section>
    )
}
