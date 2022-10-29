export const primaryColor = "#6A5FF3";
export const secondaryColor = "#7169D1";
export const tertiaryColor = "#978ff7";
export const backgroundColor = "#283149";
export const paperColor = "#343E59";
export const fontColor = "#DBEDF3";
export const errorColor = "#CA3E47";
export const disabledColor = "#787878";

export const getMonth = (month: number) => {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
       return "";
  }
};

export const getMonthList = (currentMonth: number, currentYear: number = new Date().getFullYear(), numberOfMonths: number = 4) => {
    if(numberOfMonths > 12)
        numberOfMonths = 12;
        
    const monthList: string[] = [];

    for(let i = numberOfMonths-1; i >= 0; i--){
        if(currentMonth - i <= 0)
            monthList.push(`${getMonth(12 + (currentMonth - i))} ${currentYear-1}`);
        else
            monthList.push(`${getMonth(currentMonth - i)} ${currentYear}`);
    }

    return monthList;
};
