// import { fetchPopularMovies } from 'api';
// import { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 2cc1cdd3dc7a1b39cf1b283648efca77',
  },
};

const Home = () => {
  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  // <div>Home</div>;)
};

export default Home;

// const Home = () => {
//   const [filmItems, setFilmItems] = useState([]);

//   useEffect(() => {
//     async function getFilms() {
//       try {
//         // setLoading(true);
//         const filmItems = await fetchPopularMovies();
//         setFilmItems(filmItems);
//       } catch (error) {
//         console.log(error);
//       }

//       // finally {
//       //   setLoading(false);
//       // }
//     }
//     getFilms();
//   }, []);
//   return (
//     <div>Home</div>
// <ul>
//   {filmItems.map(film => (
//     <li key={film.id}>
//      <Link></Link>
//     </li>
//   ))}
// </ul>
//   );
// };
