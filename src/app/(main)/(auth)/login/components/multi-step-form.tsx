"use client"

import { useLocalStorage } from '@/shared/hooks/useLocalStorage'
import { HttpError } from '@/shared/services/http'
import { setCookie } from '@/shared/utils/cookieClient'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { EmailForm } from './email-form'
import { PasswordForm } from './password-form'
import { postLogin } from '../../services/auth.service'

export const LoginSchema = z.object({
    email: z.email("Debe ser un correo electrónico válido").min(1, "El correo electrónico es obligatorio"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
})

export type LoginFormData = z.infer<typeof LoginSchema>

export const MultiStepForm = () => {

    const router = useRouter();
    const [, setToken] = useLocalStorage<string | null>('acc_token', null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [step, setStep] = useState<number>(1);

    const form = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmitEmail = () => {
        setStep(2);
        setErrorMessage(null);
    }

    const onSubmitPassword = async (body: LoginFormData) => {
        try {
            const data = await postLogin(body);

            setCookie({
                name: 'acc_token',
                value: data.token,
            })
            setToken(data.token);

            toast.success("Inicio de sesión exitoso");
            router.push('/dashboard');
        } catch (error: unknown) {
            if (error instanceof HttpError) {
                const status = error.response.status;
                if (status === 404) {
                    setErrorMessage("Usuario inexistente. Vuelve a intentarlo");
                    form.reset();
                    setStep(1);
                }
                if (status === 401) {
                    setErrorMessage("Contraseña incorrecta. Vuelve a intentarlo");
                    form.resetField("password");
                    setStep(2);
                }
            } else {
                setErrorMessage("Ocurrió un error inesperado. Por favor, intenta nuevamente más tarde.");
                form.reset();
                setStep(1);
            }
        }
    }

    return (
        <section className='flex flex-col justify-center gap-4 h-full mx-auto max-w-80'>
            {step === 1 && <EmailForm form={form} onSubmit={onSubmitEmail} />}
            {step === 2 && <PasswordForm form={form} onSubmit={onSubmitPassword} />}
            {errorMessage && <p className='text-center text-red-500 italic'>{errorMessage}</p>}
        </section>
    )
}
