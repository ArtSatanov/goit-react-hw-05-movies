import { MoviesItem } from 'components/MovieItem/MovieItem';
import { ImageGalleryItemLi, ImageGalleryUl } from './MoviesList.styled';

export const MoviesList = ({ moviesList, location }) => {
  return (
    <div>
      <ImageGalleryUl>
        {moviesList.map(resp => (
          <ImageGalleryItemLi key={resp.id}>
            <MoviesItem
              id={resp.id}
              title={resp.title ?? resp.name}
              poster={resp.backdrop_path}
              location={location}
            />
          </ImageGalleryItemLi>
        ))}
      </ImageGalleryUl>
    </div>
  );
};
