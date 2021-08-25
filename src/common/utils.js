export const getPaginationArray = (totalSize, sizePerPage) => {
  const noOfPages = Math.ceil(totalSize / sizePerPage);
  const array = [];
  let pageNo = 1;
  while (pageNo <= noOfPages) {
    array.push(pageNo);
    pageNo = pageNo + 1;
  }
  return array;
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
