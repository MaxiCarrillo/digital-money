import { PlusIcon } from '@/shared/icons'
import Link from 'next/link'
import React from 'react'
import { CardList } from './card-list';
import { CardType } from '@/types';
import { useFormContext } from 'react-hook-form';
import { DepositFormData } from './multi-step-form';

interface SelectCardProps {
    cards: CardType[];
    nextStep: () => void;
}

export const SelectCard = ({ cards = [], nextStep }: SelectCardProps) => {
    const form = useFormContext<DepositFormData>();

    return (
        <section className='bg-background p-8 rounded-lg shadow-md space-y-4'>
            <h1 className='text-2xl text-accent mt-4'>Seleccionar tarjeta</h1>
            <CardList cards={cards} />
            <div className='flex flex-row items-center justify-between'>
                <Link href='/dashboard/cards/add' className='flex items-center gap-2 text-accent hover:text-accent-light transition font-bold'>
                    <PlusIcon />
                    Agregar tarjeta
                </Link>
                <button type='button' className='block button py-3' disabled={!form.watch('account_id')} onClick={nextStep}>Continuar</button>
            </div>
        </section>
    )
}
