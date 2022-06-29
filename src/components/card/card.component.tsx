import { IMonster } from "../../App";

import "./card-styles.css";

interface CardProps {
  monster: IMonster;
}

const Card = ({ monster }: CardProps) => {
  return (
    <div className="card-container" key={monster.id}>
      <img
        alt={`monster ${monster.name}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2 key={monster.id}>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
