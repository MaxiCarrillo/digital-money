"use client";

import CopyIcon from '@/shared/icons/copy';
import React, { FC } from 'react'
import { toast } from 'sonner';

interface AliasAndCVUInfoProps {
    cvu: string;
    alias: string;
}

export const AliasAndCVUInfo: FC<AliasAndCVUInfoProps> = ({ cvu, alias }) => {

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.info('Texto copiado al portapapeles', { icon: '📋' });
        }).catch(() => {
            toast.error('Error al copiar el texto. Por favor, intenta de nuevo.');
        });
    }

    return (
        <article className='bg-background text-foreground p-8 rounded-lg shadow-background/70 shadow-md space-y-4'>
            <h1 className='text-base'>Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</h1>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-bold text-xl text-accent'>CVU</p>
                    <p>{cvu}</p>
                </div>
                <button onClick={() => handleCopy(cvu)}>
                    <CopyIcon className='cursor-pointer hover:scale-110 transition' width={24} height={24} />
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-bold text-xl text-accent'>Alias</p>
                    <p>{alias}</p>
                </div>
                <button onClick={() => handleCopy(alias)}>
                    <CopyIcon className='cursor-pointer hover:scale-110 transition' width={24} height={24} />
                </button>
            </div>
        </article>
    )
}
