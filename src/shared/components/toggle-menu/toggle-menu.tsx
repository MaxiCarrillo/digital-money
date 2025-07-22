"use client"

import MenuIcon from '@/shared/icons/menu';
import XIcon from '@/shared/icons/x';
import React, { FC, useState } from 'react'
import { MenuItems } from '../menu-items/menu-items';
import { useRouter } from 'next/navigation';
import { deleteCookie } from '@/shared/utils/cookieClient';
import { toast } from 'sonner';

interface ToggleMenuProps {
    username: { name: string; lastname: string };
}

export const ToggleMenu: FC<ToggleMenuProps> = ({ username }) => {

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className='block  cursor-pointer' onClick={openMenu}>
                <MenuIcon className='[&_path]:fill-accent' />
            </button>
            {
                isOpen && (
                    <div className='fixed top-0 left-0 z-50 w-screen h-screen bg-accent '>
                        <section className='bg-background p-4 space-y-4'>
                            <button className='block ml-auto cursor-pointer' onClick={closeMenu}>
                                <XIcon width={30} height={30} />
                            </button>
                            <h1 className="font-bold text-accent px-8">
                                Hola, {username.name} {username.lastname}
                            </h1>
                        </section>
                        <MenuItems className='px-12' closeMenu={closeMenu} />
                    </div>
                )
            }
        </>
    )
}
