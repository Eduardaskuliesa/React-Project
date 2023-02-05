import CerealsModel from 'models/cereals';
import React from 'react';
import classes from './cereals-card.module.scss';

type CerealCardProps = CerealsModel;

const CerealCard: React.FC<CerealCardProps> = ({
  name,
  price,
  img,
}) => (

  <div className={classes.card}>
    <div className={classes.imgBx}>
      <img src={img} alt="" className={classes.img} />
    </div>
    <div className={classes.content}>
      <h2>{name}</h2>
      <p>
        {price}
        $
      </p>
    </div>
  </div>

);

export default CerealCard;
