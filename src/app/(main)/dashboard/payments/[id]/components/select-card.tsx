import { formatAmount } from '@/shared/utils';
import { CardType, ServiceType } from '@/types';
import Link from 'next/link';
import React, { FC } from 'react'
import { CardList } from './card-list';
import { useFormContext } from 'react-hook-form';
import { PaymentFormData } from './multi-step-form';

interface SelectCardProps {
    service: ServiceType;
    cards: CardType[];
}

export const SelectCard: FC<SelectCardProps> = ({ service, cards }) => {

    const form = useFormContext<PaymentFormData>();

    return (
        <>
            <section className='bg-background p-8 rounded-lg shadow-md space-y-4 mb-4'>
                <div className='border-b border-foreground/10 pb-4 mb-4 flex justify-between items-center'>
                    <h1 className='text-accent'>{service.name}</h1>
                    <Link className="underline text-base font-normal text-foreground" href="/dashboard/payments">
                        Ver detalles del pago
                    </Link>
                </div>
                <div className='flex justify-between text-foreground'>
                    <h2>Total a pagar</h2>
                    <h2>{formatAmount(Number(service.invoice_value))}</h2>
                </div>
            </section>
            <CardList cards={cards} />
            <div className='flex flex-row items-center justify-end mt-4'>
                <button
                    type='submit'
                    className='block button py-3 w-full max-w-56'
                    disabled={!form.watch('account_id')}
                >
                    Pagar
                </button>
            </div>

        </>
    )
}
