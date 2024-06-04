const getStudentsByLocation = (students, city) => {
    const filterdStudents = students.filter((funtion) => funtion.location === city);
    return filterdStudents;
  };
  
  export default getStudentsByLocation;