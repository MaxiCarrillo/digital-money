import { ArrowIcon } from '@/shared/icons';
import React from 'react'

interface BreadcrumbProps {
    text: string;
}

export const Breadcrumb = ({ text }: BreadcrumbProps) => {
    return (
        <p className='sm:hidden flex items-center gap-1'><ArrowIcon width={16} height={16} className='[&_*]:fill-surface/30' /><span className='font-semibold'>{text}</span></p>
    )
}
