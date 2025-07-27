import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form';
import { PaymentFormData } from './multi-step-form';
import { handleNumberKeyDown } from '@/shared/utils';

interface AccountNumberProps {
    nextStep: () => void;
}

export const AccountNumber: FC<AccountNumberProps> = ({ nextStep }) => {

    const form = useFormContext<PaymentFormData>();

    return (
        <section className='bg-background p-8 rounded-lg shadow-md space-y-4' >
            <h1 className='text-2xl text-accent mt-4'>Número de cuenta sin el primer 2</h1>
            <input
                type='text'
                className='w-full max-w-sm'
                placeholder='Número de cuenta'
                {...form.register('account_number')}
                onKeyDown={handleNumberKeyDown}
                minLength={11}
                maxLength={11}
            />
            <p className='text-sm text-foreground/60'>Son 11 números sin espacios, sin el “2” inicial. Agregá ceros adelante si tenés menos.</p>
            <div className='flex flex-row justify-end'>
                <button
                    type='button'
                    className='button w-full max-w-48 py-3'
                    disabled={!form.watch('account_number')}
                    onClick={nextStep}>Continuar</button>
            </div>
        </section>
    )
}
