export const convertDateToMs = (createdDate) => {
  const noteCreatedDate = new Date(createdDate);

  return noteCreatedDate.getTime();
};


