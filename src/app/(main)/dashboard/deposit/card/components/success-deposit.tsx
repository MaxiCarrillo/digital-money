import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import { FC } from 'react';

interface SuccessDepositProps {
    amount: number;
    cvu: string;
}

export const SuccessDeposit: FC<SuccessDepositProps> = ({ amount, cvu }) => {

    const formatDate = (date: Date) => {
        return format(date, "d 'de' MMMM yyyy 'a' HH:mm 'hs'", { locale: es })
    }

    return (
        <>
            <section className='bg-background text-foreground p-8 rounded-lg shadow-md space-y-4'>
                <div>
                    <p>{formatDate(new Date())}</p>
                    <p className='font-bold text-xl text-accent'>${amount}</p>
                </div>
                <p className='text-xs'>Para</p>
                <h2 className='text-xl font-bold text-accent'>Cuenta propia</h2>
                <div>
                    <p>Brubank</p>
                    <p>CVU {cvu}</p>
                </div>
            </section>
            <section className='flex justify-end gap-4 mt-4'>
                <Link href='/dashboard' className='block button button-secondary bg-background/10 text-background w-full max-w-48 py-3'>Ir al Inicio</Link>
                <button className='block button w-full max-w-56 py-3'>Descargar comprobante</button>
            </section>
        </>
    )
}
