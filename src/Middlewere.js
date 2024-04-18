function calculateAge(dateOfBirth) {
  const today = new Date();
  const dob = new Date(dateOfBirth);

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
    if (ageDays < 0) {
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  }

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  };
}

export default calculateAge;
const dateOfBirth = "1990-03-12";
const age = calculateAge(dateOfBirth);
console.log(age); // Output: 34
