function yearOfBirth(age) {
    if (age < 0) throw "Age can not be negative";
    return 2016 - age;
}

function whoAmI(name, age) {
  if (name === undefined || age === undefined) {
    console.error("Arguments not valid");
}
  else if (typeof name !== "string" || age.isNaN) {
    console.error("Arguments invalid");
  }
  else{
    try {
      var yob = yearOfBirth(age);
    }
    catch(error) {
      var yob = 'an unknown year';
      age = 'an impossible number of'
      console.error(error);
    }
    finally {
      console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old');
      console.log("I was born in " + yob);
    }
  }
}