import { Route, Routes } from "react-router";
import { Homepage, Login, Notes, Labels, Archives, Trash } from "../pages/pages";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/notes" element={<Notes />}></Route>
      <Route path="/labels" element={<Labels />}></Route>
      <Route path="/archives" element={<Archives />}></Route>
      <Route path="/trash" element={<Trash />}></Route>
    </Routes>
  );
};

