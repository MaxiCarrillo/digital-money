import { Breadcrumb } from '@/shared/components'
import React, { FC, PropsWithChildren } from 'react'

const PaymentsLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Breadcrumb text="Pagar servicios" />
            {children}
        </>
    )
}

export default PaymentsLayout