import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h2>
        Ooops!
        This page not found!
      </h2>
      {/* <Image alt="404" /> */}
      <Link to="UserPage">
        <button type="button">To main page</button>
      </Link>
    </>
  );
};
