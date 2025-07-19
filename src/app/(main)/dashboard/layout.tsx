import { Navbar } from '@/shared/components/navbar/navbar'
import React, { FC, PropsWithChildren } from 'react'

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Navbar username='Lionel Messi'/>
            <main>{children}</main>
        </div>
    )
}

export default DashboardLayout