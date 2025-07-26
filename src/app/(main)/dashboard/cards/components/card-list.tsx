"use client"

import { CircleListItem } from '@/shared/components';
import { deleteCard } from '@/shared/services';
import { CardType } from '@/types';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { toast } from 'sonner';

interface CardListProps {
    idUser: number;
    cards: CardType[];
}

export const CardList: FC<CardListProps> = ({ cards, idUser }) => {

    const router = useRouter();

    const handleDeleteCard = async (cardId: number) => {
        try {
            await deleteCard(idUser, cardId);
            router.refresh();
            toast.success(`Tarjeta ${cardId} eliminada`);
        } catch (error) {
            console.error(error);
            toast.error('Error al eliminar la tarjeta');
        }
    }

    const renderList = () => {
        return cards.map((card, index) => (
            <CircleListItem
                key={index}
                rightContent={<button className='font-bold cursor-pointer' onClick={() => handleDeleteCard(card.id)}>Eliminar</button>}
            >
                Terminada en {card.number_id.toString().slice(-4)}
            </CircleListItem>
        ));
    }

    return (
        <section className='bg-foreground py-8 px-4 sm:px-8 rounded-lg shadow-md'>
            <h1 className='text-base pb-2 border-b-surface/30 border-b'>Tus tarjetas</h1>
            <ul>
                {cards.length > 0 ? renderList() : (
                    <CircleListItem isPlaceholder>
                        No tienes tarjetas asociadas
                    </CircleListItem>
                )}
            </ul>
        </section>
    )
}
