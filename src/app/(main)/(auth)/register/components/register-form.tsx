"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { postRegister } from '../services';

export const RegisterSchema = z.object({
    firstname: z.string().min(1, "El nombre es obligatorio"),
    lastname: z.string().min(1, "El apellido es obligatorio"),
    dni: z.string().min(1, "El DNI es obligatorio"),
    email: z.email("Debe ser un correo electrónico válido").min(1, "El correo electrónico es obligatorio"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    repassword: z.string().min(6, "La confirmación de contraseña debe tener al menos 6 caracteres"),
    phone: z.string().min(1, "El teléfono es obligatorio"),
}).refine((data) => data.password === data.repassword, {
    message: "Las contraseñas deben coincidir",
    path: ['repassword'],
});

export type RegisterFormData = z.infer<typeof RegisterSchema>

export const RegisterForm = () => {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const form = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            repassword: '',
            firstname: '',
            lastname: '',
            dni: '',
            phone: '',
        },
    })

    const onSubmit = async (data: RegisterFormData) => {
        const body = {
            ...data,
            dni: Number(data.dni),
        }
        try {
            setErrorMessage(null);
            await postRegister(body);
        } catch (error) {
            setErrorMessage("No se pudo crear la cuenta. Por favor, verifica los datos e intenta nuevamente.");
        }
    }

    return (
        <>
            <h1 className='text-center text-xl my-4'>Crear cuenta</h1>
            <form className='space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 gap-4' onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstname" hidden>Nombre</label>
                    <input
                        className={form.formState.errors.firstname && 'ring-red-500'}
                        type="text"
                        id="firstname"
                        placeholder="Nombre*"
                        {...form.register("firstname")}
                        required
                    />
                    {form.formState.errors.firstname && (
                        <p className='text-red-500 italic'>{form.formState.errors.firstname.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="lastname" hidden>Apellido</label>
                    <input
                        className={form.formState.errors.lastname && 'ring-red-500'}
                        type="text"
                        id="lastname"
                        placeholder="Apellido*"
                        {...form.register("lastname")}
                        required
                    />
                    {form.formState.errors.lastname && (
                        <p className='text-red-500 italic'>{form.formState.errors.lastname.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="dni" hidden>DNI</label>
                    <input
                        className={form.formState.errors.dni && 'ring-red-500'}
                        type="number"
                        id="dni"
                        placeholder="DNI*"
                        {...form.register("dni")}
                        required
                    />
                    {form.formState.errors.dni && (
                        <p className='text-red-500 italic'>{form.formState.errors.dni.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" hidden>Correo</label>
                    <input
                        className={form.formState.errors.email && 'ring-red-500'}
                        type="text"
                        id="email"
                        placeholder="Correo electrónico*"
                        autoComplete="email"
                        {...form.register("email")}
                        required
                    />
                    {form.formState.errors.email && (
                        <p className='text-red-500 italic'>{form.formState.errors.email.message}</p>
                    )}
                </div>
                <p className='col-span-2 text-sm'>Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter especial, una mayúscula y un número)</p>
                <div>
                    <label htmlFor="password" hidden>Contraseña</label>
                    <input
                        className={form.formState.errors.password && 'ring-red-500'}
                        type="password"
                        id="password"
                        placeholder="Contraseña*"
                        {...form.register("password")}
                        required
                    />
                    {form.formState.errors.password && (
                        <p className='text-red-500 italic'>{form.formState.errors.password.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="repassword" hidden>Confirmar contraseña</label>
                    <input
                        className={form.formState.errors.repassword && 'ring-red-500'}
                        type="password"
                        id="repassword"
                        placeholder="Confirmar contraseña*"
                        {...form.register("repassword")}
                        required
                    />
                    {form.formState.errors.repassword && (
                        <p className='text-red-500 italic'>{form.formState.errors.repassword.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="phone" hidden>Teléfono</label>
                    <input
                        className={form.formState.errors.phone && 'ring-red-500'}
                        type="tel"
                        id="phone"
                        placeholder="Teléfono*"
                        {...form.register("phone")}
                        required
                    />
                    {form.formState.errors.phone && (
                        <p className='text-red-500 italic'>{form.formState.errors.phone.message}</p>
                    )}
                </div>
                <button type="submit" className="button">Crear cuenta</button>
                {errorMessage && <p className='text-center text-red-500 italic sm:col-span-2'>{errorMessage}</p>}
            </form>
        </>
    )
}
