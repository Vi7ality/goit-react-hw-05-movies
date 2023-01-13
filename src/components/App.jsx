import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Home } from "pages/Home/Home";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";
import { Movies } from "pages/Movies/Movies";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} end></Route>
        <Route path="movies" element={<Movies/>}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>}></Route>
          <Route path="reviews" element={<Reviews/>}></Route>
        </Route>
            </Route>
    </Routes>
)};
