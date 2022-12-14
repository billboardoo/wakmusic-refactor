const useToDay = (datePlusNumber: number, type: string) => {
  var date = new Date();
  if (type == "year") {
    date = new Date(date.setFullYear(date.getFullYear() + datePlusNumber));
  } else {
    date = new Date(date.setMonth(date.getMonth() + datePlusNumber));
  }

  var year = date.getFullYear().toString();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  const toDay = type == "year" ? parseInt(year) : parseInt(year + month);

  return { toDay };
};

export default useToDay;
