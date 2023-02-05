import CerealsModel from 'models/cereals';
import React from 'react';
import classes from './cereals-card.module.scss';

type CerealCardProps = CerealsModel;

const BeerCard: React.FC<CerealCardProps> = ({
  name,
  price,
  img,
}) => (
  <div className={classes.card}>
    <img src={img} alt="" className={classes.img} />
    <div className={classes.backgroundOverlay} />
    <div className={classes.cardContent}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <span>Name</span>
          <span>{name}</span>
        </li>
        <li className={classes.listItem}>
          <span>Price</span>
          <span>
            {price}
            $
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default BeerCard;
