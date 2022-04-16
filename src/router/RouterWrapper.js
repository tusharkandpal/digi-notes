import { Route, Routes } from "react-router";
import { Homepage, Login, Notes } from "../pages/pages";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/notes" element={<Notes />}></Route>
    </Routes>
  );
};

