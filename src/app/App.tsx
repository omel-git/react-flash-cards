import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ReactElement } from 'react';
import { CardsBoard } from 'widgets/CardsBoard';
import { cardsText } from 'shared/content/cards';

function App(): ReactElement {
  return (
    <div className={classNames('App')}>
      <CardsBoard className="boad" cardsText={cardsText}></CardsBoard>
    </div>
  );
}

export default App;
