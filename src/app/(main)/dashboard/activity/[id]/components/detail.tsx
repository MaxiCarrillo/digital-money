import { CheckIcon } from '@/shared/icons';
import { formatAmount, formatExpirationDate } from '@/shared/utils';
import { TransactionType } from '@/types'
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import React from 'react'

interface DetailActivityPageProps {
    detailActivity: TransactionType;
}

export const Detail = ({ detailActivity }: DetailActivityPageProps) => {

    const formatDate = (date: Date) => {
        return format(date, "d 'de' MMMM yyyy 'a' HH:mm 'hs'", { locale: es })
    }


    return (
        <article className='bg-background text-foreground rounded-lg shadow-md p-8 space-y-4'>
            <div className='flex justify-between pb-4 border-b border-accent'>
                <h1 className='flex gap-2 items-center text-lg text-accent font-bold'><CheckIcon width={18} height={18} /> Aprobada</h1>
                <p>Creada el {formatDate(new Date(detailActivity?.dated))}</p>
            </div>
            <div>
                <p>Tipo: {detailActivity?.type}</p>
                <p className='text-accent font-bold'>{formatAmount(detailActivity?.amount)}</p>
            </div>
            <div>
                <p>Destino</p>
                <p className='text-accent font-bold capitalize'>{detailActivity?.destination}</p>
            </div>
            <div>
                <p>Número de operación</p>
                <p className='text-accent'>{detailActivity?.id}</p>
            </div>
        </article>
    )
}
