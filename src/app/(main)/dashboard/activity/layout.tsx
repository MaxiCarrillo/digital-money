import { Breadcrumb } from '@/shared/components'
import React, { FC, PropsWithChildren } from 'react'

const ActivityLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Breadcrumb text="Tu actividad" />
            {children}
        </>
    )
}

export default ActivityLayout