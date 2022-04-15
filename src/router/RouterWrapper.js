import { Route, Routes } from "react-router";
import { Homepage, Note } from "../pages/pages";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/note" element={<Note />}></Route>
    </Routes>
  );
};
