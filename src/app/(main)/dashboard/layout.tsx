import { MenuItems } from '@/shared/components/menu-items/menu-items';
import { Navbar } from '@/shared/components/navbar/navbar'
import { getAcountInfo } from '@/shared/services/account.service';
import { getUserInfo } from '@/shared/services/user.service';
import { cookies } from 'next/headers';
import React, { FC, PropsWithChildren } from 'react'

const DashboardLayout: FC<PropsWithChildren> = async ({ children }) => {

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
    const userInfo = accessToken && accountInfo ? await getUserInfo(accountInfo.user_id, accessToken.value) : null;

    return (
        <>
            <Navbar username={userInfo ? { name: userInfo.firstname, lastname: userInfo.lastname } : undefined} />
            <div className='grid grid-cols-1 sm:grid-cols-[200px_1fr] h-full'>
                <aside className='hidden sm:block bg-accent'>
                    <MenuItems />
                </aside>
                <main className='bg-neutral-light text-background px-8 py-8 space-y-3'>{children}</main>
            </div>
        </>
    )
}

export default DashboardLayout