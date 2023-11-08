import { Link } from 'react-router-dom';
import { ImageGalleryItemImage, TitleIMG } from './MovieItem.styled';

export const MoviesItem = ({ id, title, poster, location }) => {
  return (
    <div>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {poster && (
          <ImageGalleryItemImage
            src={`https://image.tmdb.org/t/p/w300${poster}`}
            alt={title}
          />
        )}

        <TitleIMG>{title}</TitleIMG>
      </Link>
    </div>
  );
};
