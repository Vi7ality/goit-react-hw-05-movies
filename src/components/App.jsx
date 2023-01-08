import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="goit-react-hw-05-movies/" element={<SharedLayout />}>
        <Route index element={<Home />} end></Route>
        <Route path="movies/:id" element={<MovieDetails />}></Route>
            </Route>
    </Routes>
)};
