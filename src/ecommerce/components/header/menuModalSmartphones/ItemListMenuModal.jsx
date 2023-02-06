import { ItemCardMenuModal } from './ItemCardMenuModal';
import ManModel from '../../../../assets/images/man-model.png';
import WomanModel from '../../../../assets/images/woman-model.png';
import Home from '../../../../assets/images/home.png';
import Search from '../../../../assets/images/search.png';
import Purchases from '../../../../assets/images/purchases.png';
import Favorite from '../../../../assets/images/favorite.png';
import { Link } from 'react-router-dom';

export const ItemListMenuModal = ({ onModalMenClick, onModalWomenClick, onSearchClick, setIsMenuActive }) => {
  return (
    <ul className="px-6">
      <div
        onClick={onModalMenClick}
        className="relative">
        <ItemCardMenuModal
          text="Men"
          image={ManModel}
          altImage="Men model"
        />
      </div>
      <div onClick={onModalWomenClick}>
        <ItemCardMenuModal
          text="Women"
          image={WomanModel}
          altImage="Woman model"
        />
      </div>
      <Link
        to="/"
        replace>
        <ItemCardMenuModal
          text="Home"
          image={Home}
          altImage="Home"
          onClick={() => setIsMenuActive(false)}
        />
      </Link>

      <ItemCardMenuModal
        onClick={onSearchClick}
        text="Search"
        image={Search}
        altImage="Search"
      />

      <Link to="/purchases">
        <ItemCardMenuModal
          text="My purchases"
          image={Purchases}
          altImage="Purchases"
          onClick={() => setIsMenuActive(false)}
        />
      </Link>

      <Link to="/favorites">
        <ItemCardMenuModal
          text="My Favorites"
          image={Favorite}
          altImage="Favorite"
          onClick={() => setIsMenuActive(false)}
        />{' '}
      </Link>
    </ul>
  );
};
