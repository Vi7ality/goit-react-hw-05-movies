import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("pages/Home/Home"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));
const Movies = lazy(() => import("pages/Movies/Movies"));
// import { Home } from "pages/Home/Home";
// import { MovieDetails } from "pages/MovieDetails/MovieDetails";
// import { Cast } from "./Cast";
// import { Reviews } from "./Reviews";
// import { Movies } from "pages/Movies/Movies";

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
