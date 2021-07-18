import React from 'react';
import Card from '../Card/Card';
import type { Card as ICard } from '@sns/contracts/payment';

export default function Cards({
  cards,
  cardId,
  setCardId,
}: {
  cards: ICard[];
  cardId: string;
  setCardId(id: string): void;
}) {
  return (
    <>
      {cards.map((card) => {
        return (
          <Card key={card.id} card={card} cardId={cardId} onClick={setCardId} />
        );
      })}
    </>
  );
}
