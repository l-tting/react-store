export const getCurrentDateTime =()=> {
    const currentDate = new Date();
    console.log("Date",currentDate)
    return currentDate.toString();  // default date and time format
  }
  