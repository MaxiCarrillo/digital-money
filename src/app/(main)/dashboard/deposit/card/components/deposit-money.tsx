import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form';
import { DepositFormData } from './multi-step-form';
import { handleNumberKeyDown } from '@/shared/utils';

interface DepositMoneyProps {
    nextStep: () => void;
}

export const DepositMoney: FC<DepositMoneyProps> = ({ nextStep }) => {
    const form = useFormContext<DepositFormData>();

    return (
        <section className='bg-background p-8 rounded-lg shadow-md space-y-4' >
            <h1 className='text-2xl text-accent mt-4'>¿Cuánto querés ingresar a la cuenta?</h1>
            <input
                type='number'
                className='w-full max-w-sm'
                placeholder='$0'
                {...form.register('amount', { valueAsNumber: true })}
                onKeyDown={handleNumberKeyDown} min={1}
            />
            <div className='flex flex-row justify-end'>
                <button
                    type='button'
                    className='button w-full max-w-48 py-3'
                    disabled={!form.watch('amount')}
                    onClick={nextStep}>Continuar</button>
            </div>
        </section>
    )
}
