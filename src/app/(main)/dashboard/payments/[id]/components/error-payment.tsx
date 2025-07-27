import { CircleXIcon } from '@/shared/icons';
import Link from 'next/link'
import React from 'react'

interface ErrorPaymentProps {
    title: string;
    description: string;
    buttonText?: string;
}

export const ErrorPayment: React.FC<ErrorPaymentProps> = ({ title, description, buttonText = "Volver a intentar" }) => {
    return (
        <>
            <section className='bg-background p-8 rounded-lg shadow-md space-y-4 text-foreground'>
                <CircleXIcon className="mx-auto" />
                <h1 className='text-center border-b border-surface/60 pb-4'>{title}</h1>
                <p className='m-auto max-w-128 text-center text-foreground/60'>{description}</p>
            </section>
            <div className='flex justify-end gap-4 mt-4'>
                <Link href="/dashboard/payments" className="block button w-full max-w-56 py-3">
                    {buttonText}
                </Link>
            </div>
        </>
    )
}
