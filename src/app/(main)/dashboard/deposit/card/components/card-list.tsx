"use client"

import { CircleListItem } from "@/shared/components";
import { CardType } from "@/types";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { DepositFormData } from "./multi-step-form";

interface CardListProps {
    cards: CardType[];
}

export const CardList: FC<CardListProps> = ({ cards }) => {
    const form = useFormContext<DepositFormData>();

    const handleCheckCard = (cardId: string) => {
        form.setValue('account_id', cardId);
    }

    const renderList = () => {
        return cards.map((card) => (
            <CircleListItem
                key={card.id}
                rightContent={<input
                    type="radio"
                    className="bg-none border-background ring-0 accent-accent w-4 h-4"
                    name="cards"
                    value={card.id}
                    checked={form.watch('account_id') === String(card.id)}
                    onChange={() => handleCheckCard(String(card.id))}
                />}
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
