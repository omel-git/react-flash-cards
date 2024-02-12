import cls from './CardsBoard.module.scss';
import { type Card } from 'shared/content/cards';
import { type ReactElement, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface CardsBoardProps {
  className?: string;
  cardsText: Card[];
}

export function CardsBoard(props: CardsBoardProps): ReactElement {
  const { className, cardsText } = props;

  const [selectedId, setSelectedId] = useState<number | null>(null);

  function handleClick(id: number): void {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <ul className={classNames(cls.CardsBoard, {}, [className ?? ''])}>
      {cardsText.map((card) => {
        return (
          <li
            key={card.id}
            onClick={() => {
              handleClick(card.id);
            }}
          >
            {card.id === selectedId ? card.answer : card.question}
          </li>
        );
      })}
    </ul>
  );
}
