"use client"

import { deleteCookie } from '@/shared/utils/cookieClient';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import { toast } from 'sonner';

const links = [
    {
        href: '/dashboard',
        label: 'Inicio'
    },
    {
        href: '/dashboard/activity',
        label: 'Actividad'
    },
    {
        href: '/dashboard/profile',
        label: 'Tu perfil'
    },
    {
        href: '/dashboard/deposit',
        label: 'Cargar dinero'
    },
    {
        href: '/dashboard/payments',
        label: 'Pagar servicios'
    },
    {
        href: '/dashboard/cards',
        label: 'Tarjetas'
    },
]

interface MenuItemsProps {
    className?: string;
    closeMenu?: () => void;
}

export const MenuItems: FC<MenuItemsProps> = ({ className, closeMenu }) => {

    const router = useRouter();
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href || (pathname.startsWith(href) && href !== '/dashboard');
    }

    const handleLogout = () => {
        localStorage.removeItem('acc_token');
        deleteCookie('acc_token');
        router.push('/');
        toast.success("Sesión cerrada exitosamente.");
    }

    return (
        <div className={`flex flex-col items-start p-4 space-y-2 ${className}`}>
            <ul className='flex flex-col gap-2 text-background'>
                {links.map(link => (
                    <li key={link.href}>
                        <Link className={`${isActive(link.href) ? 'font-extrabold' : 'font-medium'}`} href={link.href} onClick={closeMenu}>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <button className='text-background/50 cursor-pointer' onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}
