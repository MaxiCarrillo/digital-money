import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { LoginFormData } from './multi-step-form';


interface PasswordFormProps {
    form: UseFormReturn<LoginFormData>;
    onSubmit: (data: LoginFormData) => void;
}

export const PasswordForm: FC<PasswordFormProps> = ({ form, onSubmit }) => {
    return (
        <>
            <h1 className='text-center text-xl my-4'>Ingresá tu contraseña</h1>
            <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="password" hidden>Contraseña</label>
                    <input
                        className={form.formState.errors.password && 'ring-red-500'}
                        type="password"
                        id="password"
                        {...form.register("password")}
                        minLength={6}
                        placeholder="Contraseña*"
                        autoComplete="current-password"
                        required
                    />
                    {form.formState.errors.password && (
                        <p className='text-red-500 italic'>{form.formState.errors.password.message}</p>
                    )}
                </div>
                <button type="submit" className="button">Continuar</button>
            </form>
        </>
    )
}
