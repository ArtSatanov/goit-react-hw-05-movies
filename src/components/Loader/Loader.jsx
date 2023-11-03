import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <p>LOADING...</p>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      ;
    </div>
  );
};
