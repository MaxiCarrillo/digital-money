import { CardType } from '@/types';
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form';
import { PaymentFormData } from './multi-step-form';
import { CircleListItem } from '@/shared/components';

interface CardListProps {
    cards: CardType[];
}

export const CardList: FC<CardListProps> = ({ cards }) => {
    const form = useFormContext<PaymentFormData>();

    const handleCheckCard = (cardId: string) => {
        form.setValue('account_id', cardId);
        form.setValue(
            'card_number',
            cards.find(card => card.id === Number(cardId))?.number_id?.toString() || ''
        );
    }

    const renderList = () => {
        return cards.map((card) => (
            <CircleListItem
                key={card.id}
                rightContent={
                    <input
                        type="radio"
                        className="bg-accent border-accent ring-0 accent-background w-4 h-4 relative checked:before:block checked:before:absolute checked:before:rounded-full checked:before:bg-accent checked:before:w-full checked:before:h-full checked:before:outline checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:bg-background checked:after:w-[10px] checked:after:h-[10px] checked:after:rounded-full checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                        name="cards"
                        value={card.id}
                        checked={form.watch('account_id') === String(card.id)}
                        onChange={() => handleCheckCard(String(card.id))}
                    />
                }
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
