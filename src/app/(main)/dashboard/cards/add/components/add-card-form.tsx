"use client"

import { postCards } from '@/shared/services';
import { handleCardNumberChange, handleCVCChange, handleExpirationDateChange, handleNumberKeyDown } from "@/shared/utils";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import * as z from 'zod';

export const AddCardFormSchema = z.object({
    first_last_name: z.string().min(1, "El nombre de la tarjeta es obligatorio").refine(
        (val) => /^[a-zA-Z\s]+$/.test(val),
        { message: "El nombre solo puede contener letras y espacios" }
    ),
    number_id: z.string().min(1, "El número de la tarjeta es obligatorio").refine(
        (val) => val.replace(/\s/g, '').length === 16,
        { message: "El número de la tarjeta debe tener 16 dígitos" }
    ),
    expiration_date: z.string()
        .min(1, "La fecha de expiración es obligatoria")
        .refine(
            (val) => {
                const cleanDate = val.replace(/\D/g, '');
                return cleanDate.length === 6; // MMYYYY
            },
            { message: "La fecha debe tener el formato MM/YYYY" }
        )
        .refine(
            (val) => {
                const cleanDate = val.replace(/\D/g, '');
                const month = parseInt(cleanDate.substring(0, 2));
                return month >= 1 && month <= 12;
            },
            { message: "El mes debe estar entre 01 y 12" }
        ),
    cvc: z.string().min(3, "El CVC es obligatorio").max(4, "El CVC debe tener 3 o 4 dígitos"),
});

export type AddCardForm = z.infer<typeof AddCardFormSchema>;

interface AddCardFormProps {
    userId: number;
}

export const AddCardForm: FC<AddCardFormProps> = ({ userId }) => {

    const [focused, setFocused] = useState<string | undefined>(undefined);
    const router = useRouter();

    const form = useForm<AddCardForm>({
        resolver: zodResolver(AddCardFormSchema),
        mode: 'onBlur',
        defaultValues: {
            first_last_name: '',
            number_id: '',
            expiration_date: '',
            cvc: ''
        }
    })

    const { register } = form;

    const onSubmit = async (data: AddCardForm) => {
        try {
            const body = {
                ...data,
                cod: Number(data.cvc),
                number_id: Number(data.number_id.replace(/\s/g, '')),
            };
            await postCards(userId, body);
            form.reset();
            toast.success("Datos de la tarjeta enviados correctamente");
            router.push('/dashboard/cards');
        } catch (error) {
            toast.error("Error al enviar los datos de la tarjeta");
            console.error("Error submitting card data:", error);
        }
    };

    return (
        <section className="bg-foreground py-4 sm:p-8 rounded-lg">
            <Cards
                number={form.watch('number_id')}
                name={form.watch('first_last_name')}
                expiry={form.watch('expiration_date')}
                cvc={form.watch('cvc')}
                focused={focused as any}
            />
            <form className='mt-4 px-5 sm:p-0 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 gap-4 [&_input]:shadow-accent [&_input]:shadow' onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="number_id" hidden>Número de tarjeta</label>
                    <input
                        className={form.formState.errors.number_id ? 'ring-red-500' : ''}
                        type="text"
                        id="number_id"
                        placeholder="Número de la tarjeta*"
                        {...register("number_id", {
                            onChange: (e) => handleCardNumberChange(e, form.setValue as (field: string, value: string) => void)
                        })}
                        onKeyDown={handleNumberKeyDown}
                        onFocus={(e) => setFocused(e.target.name)}
                        maxLength={19} // 16 dígitos + 3 espacios
                        required
                    />
                    {form.formState.errors.number_id && (
                        <p className='text-red-500 italic'>{form.formState.errors.number_id.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="expiration_date" hidden>Fecha de expiración</label>
                    <input
                        className={form.formState.errors.expiration_date ? 'ring-red-500' : ''}
                        type="text"
                        id="expiration_date"
                        placeholder="MM/YYYY*"
                        {...register("expiration_date", {
                            onChange: (e) => handleExpirationDateChange(e, form.setValue as (field: string, value: string) => void)
                        })}
                        onKeyDown={handleNumberKeyDown}
                        onFocus={(e) => setFocused(e.target.name)}
                        maxLength={7} // MM/YYYY = 7 caracteres
                        required
                    />
                    {form.formState.errors.expiration_date && (
                        <p className='text-red-500 italic'>{form.formState.errors.expiration_date.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="firstname" hidden>Nombre</label>
                    <input
                        className={form.formState.errors.first_last_name && 'ring-red-500'}
                        type="text"
                        id="firstname"
                        placeholder="Nombre y apellido*"
                        {...form.register("first_last_name")}
                        onFocus={(e) => setFocused(e.target.name)}
                        required
                    />
                    {form.formState.errors.first_last_name && (
                        <p className='text-red-500 italic'>{form.formState.errors.first_last_name.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="cvc" hidden>CVC</label>
                    <input
                        className={form.formState.errors.cvc ? 'ring-red-500' : ''}
                        type="text"
                        id="cvc"
                        placeholder="CVC*"
                        {...register("cvc", {
                            onChange: (e) => handleCVCChange(e, form.setValue as (field: string, value: string) => void)
                        })}
                        onKeyDown={handleNumberKeyDown}
                        onFocus={(e) => setFocused(e.target.name)}
                        maxLength={4}
                        required
                    />
                    {form.formState.errors.cvc && (
                        <p className='text-red-500 italic'>{form.formState.errors.cvc.message}</p>
                    )}
                </div>
                <button type="submit" className="col-end-3 button button" disabled={!form.formState.isValid}>Continuar</button>
            </form>
        </section>
    );
}