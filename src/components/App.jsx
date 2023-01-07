import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Home } from "pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="goit-react-hw-05-movies/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
            </Route>
    </Routes>
)};
