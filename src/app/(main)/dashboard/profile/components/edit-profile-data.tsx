"use client"

import { UserType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC, KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { ProfileInputField } from './profile-input-field';
import { useRouter } from 'next/navigation';
import { patchUserInfo } from '@/shared/services';

export const EditProfileDataSchema = z.object({
    dni: z.string().min(1, "El DNI es obligatorio"),
    email: z.email("Debe ser un correo electrónico válido").min(1, "El correo electrónico es obligatorio"),
    firstname: z.string().min(1, "El nombre es obligatorio"),
    lastname: z.string().min(1, "El apellido es obligatorio"),
    phone: z.string().min(1, "El teléfono es obligatorio"),
    password: z.union([
        z.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .regex(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
            .regex(/[a-z]/, "La contraseña debe tener al menos una letra minúscula")
            .regex(/[0-9]/, "La contraseña debe tener al menos un número")
            .regex(/[^A-Za-z0-9]/, "La contraseña debe tener al menos un carácter especial"),
        z.literal("")
    ]).optional(),
});

export type EditProfileDataForm = z.infer<typeof EditProfileDataSchema>

interface EditProfileDataProps {
    userId: number;
    userInfo: UserType;
}

export const EditProfileData: FC<EditProfileDataProps> = ({ userId, userInfo }) => {

    const router = useRouter();

    const [isEditing, setIsEditing] = React.useState<Record<string, boolean>>({
        email: false,
        firstname: false,
        lastname: false,
        password: false,
        phone: false,
        dni: false,
    });

    const form = useForm<EditProfileDataForm>({
        resolver: zodResolver(EditProfileDataSchema),
        defaultValues: {
            dni: String(userInfo.dni) || '',
            email: userInfo.email || '',
            firstname: userInfo.firstname || '',
            lastname: userInfo.lastname || '',
            phone: userInfo.phone || '',
            password: undefined
        }
    })

    const onSubmit = async (data: EditProfileDataForm) => {
        try {
            const body = {
                ...data,
                dni: Number(data.dni)
            }
            console.log("Enviando datos:", body);
            console.log("User ID:", userId);

            await patchUserInfo(userId, body)

            toast.success("Datos actualizados correctamente");
            router.refresh(); // Refresca la página para mostrar los cambios

        } catch (error) {
            console.error("Error al enviar los datos:", error);
            toast.error("Error al actualizar los datos. Por favor, inténtalo de nuevo.");
            return;
        } finally {
            setIsEditing({
                email: false,
                firstname: false,
                lastname: false,
                password: false,
                phone: false,
                dni: false,
            });
        }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            form.handleSubmit(onSubmit)();
        }
    };

    return (
        <form className='p-8 bg-foreground text-background rounded-lg shadow-md [&>div:first-of-type]:border-t' onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className='text-xl mb-2'>Tus datos</h1>
            <ProfileInputField
                form={form}
                fieldName='email'
                label='Email'
                placeholder='Introduce tu email'
                isEditing={isEditing.email}
                setIsEditing={setIsEditing}
                onKeyDown={handleKeyDown}
            />
            <ProfileInputField
                form={form}
                fieldName='firstname'
                label='Nombre'
                placeholder='Introduce tu nombre'
                isEditing={isEditing.firstname}
                setIsEditing={setIsEditing}
                onKeyDown={handleKeyDown}
            />
            <ProfileInputField
                form={form}
                fieldName='lastname'
                label='Apellido'
                placeholder='Introduce tu apellido'
                isEditing={isEditing.lastname}
                setIsEditing={setIsEditing}
                onKeyDown={handleKeyDown}
            />
            <ProfileInputField
                form={form}
                fieldName='dni'
                label='DNI'
                placeholder='Introduce tu DNI'
                isEditing={isEditing.dni}
                setIsEditing={setIsEditing}
                onKeyDown={handleKeyDown}
            />
            <ProfileInputField
                form={form}
                fieldName='phone'
                label='Teléfono'
                placeholder='Introduce tu teléfono'
                isEditing={isEditing.phone}
                setIsEditing={setIsEditing}
                onKeyDown={handleKeyDown}
            />
            <ProfileInputField
                type='password'
                form={form}
                fieldName='password'
                label='Contraseña'
                placeholder='******'
                isEditing={isEditing.password}
                setIsEditing={setIsEditing}
                onKeyDown={handleKeyDown}
            />
            {Object.keys(form.formState.errors).length > 0 && (
                <div className='mt-4 p-4 bg-red-50 border border-red-200 rounded-lg'>
                    <h3 className='text-red-800 font-medium mb-2'>Por favor, corrige los siguientes errores:</h3>
                    <ul className='text-red-700 space-y-1'>
                        {Object.entries(form.formState.errors).map(([field, error]) => (
                            <li key={field} className='flex items-start'>
                                <span className='mr-2'>•</span>
                                <span>{error?.message}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    )
}
