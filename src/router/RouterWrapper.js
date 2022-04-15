import { Route, Routes } from "react-router";
import { Homepage, Login, Note } from "../pages/pages";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/note" element={<Note />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

