"use client"

import { HttpError, postTransactions } from '@/shared/services';
import { AccountType, CardType, ServiceType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { AccountNumber } from './account-number';
import { ErrorPayment } from './error-payment';
import { SelectCard } from './select-card';
import { SuccessPayment } from './success-payment';


interface MultiStepFormProps {
    accountInfo: AccountType;
    service: ServiceType;
    cards: CardType[];
}

export const PaymentSchema = z.object({
    account_number: z.string().min(11, "El número de cuenta es obligatorio").max(11, "El número de cuenta debe tener 11 dígitos"),
    account_id: z.string().min(1, "El ID de la cuenta es obligatorio"),
    card_number: z.string(),
});

export type PaymentFormData = z.infer<typeof PaymentSchema>;

export const MultiStepForm: FC<MultiStepFormProps> = ({ accountInfo, service, cards }) => {

    const [step, setStep] = useState<number>(1);
    const [error, setError] = useState({
        isError: false,
        component: null as React.ReactNode | null
    });

    const form = useForm<PaymentFormData>({
        resolver: zodResolver(PaymentSchema),
        mode: 'onChange',
        defaultValues: {
            account_id: '',
            account_number: ''
        },
    })

    const nextStep = () => {
        setStep(prev => prev + 1);
    }

    const onSubmit = async () => {
        try {
            const body = {
                "amount": - Number(service.invoice_value),
                "dated": new Date().toISOString(),
                "description": service.name
            }

            await postTransactions(accountInfo.id, body);
            toast.success("Pago realizado exitosamente.");
            setStep(3);
        } catch (error) {
            console.error("Error al procesar el pago:", error);
            toast.error("Error al procesar el pago.");
            if (error instanceof HttpError) {
                const status = error.response.status;
                if (status === 404) {
                    setError({
                        isError: true,
                        component: <ErrorPayment
                            title="No encontramos facturas asociadas a este dato"
                            description="Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura."
                            buttonText="Revisar dato"
                        />
                    });
                }
            } else {
                setError({
                    isError: true,
                    component: <ErrorPayment
                        title="Hubo un problema con tu pago"
                        description="Puede deberse a fondos insuficientes comunicate con la entidad emisora de la tarjeta"
                        buttonText="Volver a intentar"
                    />
                });
            }
        }
    }

    return (
        <FormProvider {...form}>
            {error.isError ? error.component
                :
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {step === 1 && <AccountNumber nextStep={nextStep} />}
                    {step === 2 && <SelectCard service={service} cards={cards} />}
                    {step === 3 && <SuccessPayment amount={Number(service.invoice_value)} destination={service.name} card_number={form.watch('card_number')} />}
                </form>
            }
        </FormProvider>
    )
}
