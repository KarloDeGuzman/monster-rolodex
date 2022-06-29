import { IMonster } from "../../App";

import Card from "../card/card.component";

import "./card-list.styles.css";

interface CardListProps {
  monsters: IMonster[];
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
