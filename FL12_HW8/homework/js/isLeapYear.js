function isLeapYear(str) {
  let inputDate = new Date(str);
  let fullYear = inputDate.getFullYear();
  let date = new Date(fullYear, 1, 29).getDate();
  if (date === 29) {
    return `${fullYear} + is a leap year`; 
  } else if(date === 1){
    return `${fullYear} + 'is not a leap year`;
  }else {
    return '‘Invalid Date';
  }
}

