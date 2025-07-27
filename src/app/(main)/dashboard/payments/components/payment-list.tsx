"use client"

import { CircleListItem, ImageListItem } from '@/shared/components';
import { getServiceIcon } from '@/shared/utils';
import { ServiceType } from '@/types';
import { FC } from 'react';
import { useFilterPayments } from '../hooks/useFilterPayments';
import Link from 'next/link';

interface PaymentListProps {
    services: ServiceType[];
}

const renderList = (items: ServiceType[]) => {
    return items.map((item, index) => {
        const iconFileName = getServiceIcon(item.name);
        const altText = item.name.toLowerCase().replace(/\+/g, '').replace(/\s+/g, '');

        return (
            <ImageListItem
                key={item.id || index}
                src={`/services/${iconFileName}`}
                alt={altText}
                rightContent={
                    <Link href={`/dashboard/payments/${item.id}`} className='font-bold cursor-pointer'>Seleccionar</Link>
                }
            >
                {item.name}
            </ImageListItem>
        );
    });
};

export const PaymentList: FC<PaymentListProps> = ({ services }) => {

    const { filteredServices } = useFilterPayments(services);

    return (
        <section className='bg-foreground py-4 sm:py-8 px-4 sm:px-8 rounded-lg shadow-md'>
            <div className='flex justify-between pb-2 border-b-surface/30 border-b'>
                <h1 className='text-base'>Más recientes</h1>
            </div>
            <ul>
                {filteredServices && filteredServices.length > 0 ? renderList(filteredServices) : (
                    <CircleListItem isPlaceholder>
                        No se encontraron servicios.
                    </CircleListItem>
                )}
            </ul>
        </section>
    )
}
