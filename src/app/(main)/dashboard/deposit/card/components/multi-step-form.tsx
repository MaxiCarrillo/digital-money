"use client"

import { postDeposits } from '@/shared/services';
import { AccountType, CardType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { CheckDeposit } from './check-deposit';
import { DepositMoney } from './deposit-money';
import { SelectCard } from './select-card';
import { SuccessDeposit } from './success-deposit';

export const DepositSchema = z.object({
    amount: z.number().min(1, "El monto debe ser mayor a 0"),
    account_id: z.string().min(1, "El ID de la cuenta es obligatorio")
});

export type DepositFormData = z.infer<typeof DepositSchema>;

interface MultiStepFormProps {
    cards: CardType[];
    accountInfo: AccountType;
}

export const MultiStepForm: FC<MultiStepFormProps> = ({ cards, accountInfo }) => {

    const [step, setStep] = useState<number>(1);

    const form = useForm<DepositFormData>({
        resolver: zodResolver(DepositSchema),
        mode: 'onChange',
        defaultValues: {
            amount: undefined,
            account_id: '',
        },
    })

    const nextStep = () => {
        setStep(prev => prev + 1);
    }

    const prevStep = () => {
        setStep(prev => prev > 1 ? prev - 1 : 1);
    }

    const onSubmit = async (data: DepositFormData) => {
        try {
            const body = {
                origin: "origin",
                destination: "destination",
                dated: new Date().toISOString(),
                amount: Number(data.amount),
            };
            await postDeposits(accountInfo.id, body);
            toast.success("Depósito realizado exitosamente.");
            setStep(4);
        } catch (error) {
            toast.error("Error al procesar el depósito.");
            console.error("Error al procesar el depósito:", error);
            setStep(1);
            form.reset();
        }
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {step === 1 && <SelectCard cards={cards} nextStep={nextStep} />}
                {step === 2 && <DepositMoney nextStep={nextStep} />}
                {step === 3 && <CheckDeposit cvu={accountInfo.cvu} prevStep={prevStep} />}
                {step === 4 && <SuccessDeposit amount={form.watch('amount')} cvu={accountInfo.cvu} />}
            </form>
        </FormProvider>
    )
}
