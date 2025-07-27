import { SuccessCard } from '@/shared/components'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Link from 'next/link'
import React from 'react'

interface SuccessPaymentProps {
    amount: number;
    destination: string;
    card_number: string;
}

export const SuccessPayment = ({ amount, destination, card_number }: SuccessPaymentProps) => {

    const formatDate = (date: Date) => {
        return format(date, "d 'de' MMMM yyyy 'a' HH:mm 'hs'", { locale: es })
    }

    return (
        <>
            <section className='mb-4'>
                <SuccessCard message='Ya realizaste tu pago.' />
            </section>
            <section className='bg-background text-foreground p-8 rounded-lg shadow-md space-y-4'>
                <div>
                    <p>{formatDate(new Date())}</p>
                    <p className='font-bold text-xl text-accent'>${amount}</p>
                </div>
                <p className='text-xs'>Para</p>
                <h2 className='text-xl font-bold text-accent'>{destination}</h2>
                <div>
                    <p>Tarjeta</p>
                    <p>********{card_number.slice(-4)}</p>
                </div>
            </section>
            <section className='flex justify-end gap-4 mt-4'>
                <Link href='/dashboard' className='block button button-secondary bg-background/10 text-background w-full max-w-48 py-3'>Ir al Inicio</Link>
                <button className='block button w-full max-w-56 py-3'>Descargar comprobante</button>
            </section>
        </>
    )
}
