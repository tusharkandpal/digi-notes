import { useLocation } from "react-router-dom";

export const useNotesOrLabelsPage = () => {
  const { pathname } = useLocation();

  const isEitherNotesOrLabelsPage = ["/notes", "/labels"].includes(pathname);

  return [isEitherNotesOrLabelsPage, pathname];
};
