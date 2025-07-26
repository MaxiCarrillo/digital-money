import { EditNoteIcon } from '@/shared/icons';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { DepositFormData } from './multi-step-form';

interface CheckDepositProps {
    cvu: string;
    prevStep: () => void;
}

export const CheckDeposit: FC<CheckDepositProps> = ({ cvu, prevStep }) => {
    const form = useFormContext<DepositFormData>();

    return (
        <section className='bg-background text-foreground p-8 rounded-lg shadow-md space-y-4'>
            <h1 className='text-2xl text-accent mt-4'>Revisá que está todo bien</h1>
            <div>
                <div className='flex flex-row items-center gap-4'>
                    <p>Vas a transferir</p>
                    <button
                        type='button'
                        onClick={prevStep}
                    >
                        <EditNoteIcon width={18} height={18} className='cursor-pointer hover:scale-110 transition' />
                    </button>
                </div>
                <p className='font-bold text-xl'>${form.watch('amount')}</p>
            </div>
            <p className='text-xs'>Para</p>
            <h2 className='text-xl font-bold'>Cuenta propia</h2>
            <div>
                <p>Brubank</p>
                <p>CVU {cvu}</p>
            </div>
            <div className='flex flex-row justify-end'>
                <button type='submit' className='button w-full max-w-48 py-3'>Continuar</button>
            </div>
        </section>
    )
}
