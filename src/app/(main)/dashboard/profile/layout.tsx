import { Breadcrumb } from '@/shared/components'
import React, { FC, PropsWithChildren } from 'react'

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Breadcrumb text="Perfil" />
            {children}
        </>
    )
}

export default ProfileLayout