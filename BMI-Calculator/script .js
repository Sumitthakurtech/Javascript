function calculateBMI(weight, height) {
    return weight / (height ** 2);
  }
  
  const getIndividualData = (individualNumber) => {
    const name = prompt(`Hi, please enter name of ${individualNumber} Individual`);
    const height = parseFloat(prompt(`Please enter ${name}'s height (in meters)`));
    const weight = parseFloat(prompt(`Please enter ${name}'s weight (in kg)`));
    const BMI = calculateBMI(weight, height);
    return { name, BMI };
  };
  
  const individual1Data = getIndividualData("first");
  const individual2Data = getIndividualData("second");
  
  if (individual1Data.BMI > individual2Data.BMI) {
    alert(`${individual1Data.name}'s BMI is higher than ${individual2Data.name}'s BMI by ${individual1Data.BMI - individual2Data.BMI}`);
  } else if (individual1Data.BMI < individual2Data.BMI) {
    alert(`${individual2Data.name}'s BMI is higher than ${individual1Data.name}'s BMI by ${individual2Data.BMI - individual1Data.BMI}`);
  } else {
    alert(`${individual1Data.name} and ${individual2Data.name} have the same BMI.`);
  }
  