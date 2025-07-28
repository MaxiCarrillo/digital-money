import { Breadcrumb } from '@/shared/components'
import React, { FC, PropsWithChildren } from 'react'

const DepositLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Breadcrumb text="Cargar dinero" />
            {children}
        </>
    )
}

export default DepositLayout