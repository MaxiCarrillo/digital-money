import { SearchbarInput } from '@/shared/components/searchbar-input/searchbar-input';
import ArrowIcon from '@/shared/icons/arrow';
import CircleIcon from '@/shared/icons/circle';
import { formatAmount } from '@/shared/utils/formatAmount';
import { TransactionType } from '@/types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import { FC } from 'react';

interface ActivityInfoProps {
    transactions: TransactionType[];
}

export const ActivityInfo: FC<ActivityInfoProps> = ({ transactions }) => {
    return (
        <section className='space-y-3'>
            <SearchbarInput url='/dashboard/activity' />
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
                                <p className='text-xs text-background/50 capitalize'>
                                    {format(new Date(transaction.dated), "EEEE dd/MM/yyyy", { locale: es })}
                                </p>
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
