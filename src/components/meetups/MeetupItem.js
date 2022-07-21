import { useContext } from 'react';

import Card from '../UI/Card';
import FavoritesContext from '../../store/favorites-context';

import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if(itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.img,
        address:props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.img} alt={props.title} />
          <p>{props.img}</p>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? '⚔︎ Remove from Favorites' : '💕Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;