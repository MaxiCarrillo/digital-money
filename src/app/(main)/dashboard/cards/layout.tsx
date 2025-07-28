import { Breadcrumb } from '@/shared/components'
import React, { FC, PropsWithChildren } from 'react'

const CardLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Breadcrumb text="Tarjetas" />
            {children}
        </>
    )
}

export default CardLayout