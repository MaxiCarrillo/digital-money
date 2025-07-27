"use client";

import { CircleListItem } from '@/shared/components';
import { usePagination } from '@/shared/hooks/use-pagination';
import { formatAmount } from '@/shared/utils';
import { TransactionType } from '@/types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { FC, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useFilterActivity } from '../hooks/use-filter-activity';
import Link from 'next/link';

const TOTAL_ITEMS_PER_PAGE = 10;

interface ActivityListProps {
    transactions: TransactionType[];
}

const renderList = (transactions: TransactionType[]) => {
    return transactions.map((transaction) => (
        <Link href={`/dashboard/activity/${transaction.id}`} key={transaction.id}>
            <CircleListItem
                rightContent={
                    <div className='text-right'>
                        <p>- {formatAmount(transaction.amount)}</p>
                        <p className='text-xs text-background/50 capitalize'>
                            {format(new Date(transaction.dated), "EEEE dd/MM/yyyy", { locale: es })}
                        </p>
                    </div>
                }
            >
                {transaction.description}
            </CircleListItem>
        </Link>
    ));
}

export const ActivityList: FC<ActivityListProps> = ({ transactions }) => {

    const { filteredTransactions, filters } = useFilterActivity(transactions);
    const { currentItems, currentPage, totalPages, paginate } = usePagination(filteredTransactions || [], TOTAL_ITEMS_PER_PAGE);

    useEffect(() => {
        paginate(1);
    }, [filters]);

    const handlePageChange = ({ selected }: { selected: number }) => {
        paginate(selected + 1);
    }

    return (
        <section className='bg-foreground py-8 px-4 sm:px-8 rounded-lg shadow-md'>
            <h1 className='text-base pb-2 border-b-surface/30 border-b'>Tu actividad</h1>
            <ul>
                {currentItems.length > 0 ? renderList(currentItems) : (
                    <CircleListItem isPlaceholder>
                        No se encontraron actividades.
                    </CircleListItem>
                )}
            </ul>
            <ReactPaginate
                forcePage={currentPage - 1}
                pageCount={totalPages || 1}
                onPageChange={handlePageChange}

                className='flex items-center justify-center gap-4 mt-4 font-bold'
                pageClassName='cursor-pointer'

                pageLinkClassName='flex justify-center items-center w-8 h-8 aspect-square rounded-lg hover:bg-surface/10 transition-colors'
                activeLinkClassName='bg-surface/10'
                nextClassName='cursor-pointer'
                previousClassName='cursor-pointer'
                previousLinkClassName='flex justify-center items-center w-8 h-8 aspect-square rounded-lg hover:bg-surface/10 transition-colors'
                nextLinkClassName='flex justify-center items-center w-8 h-8 aspect-square rounded-lg hover:bg-surface/10 transition-colors'
                disabledClassName='cursor-not-allowed'
                disabledLinkClassName='opacity-30 cursor-not-allowed'
                nextLabel=">"
                previousLabel="<"
            />
        </section>
    )
}
