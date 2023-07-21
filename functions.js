const functions = {
    StringLength: (str) => {
      if (str.length <= 1 || str.length >= 10) {
        let Error = "Length must be greater than 1 and less than 10";
        return Error;
      } else {
        return str.length;
      }
    },
    reverseString: (str) => {
      let stringArray = str.split("");
      stringArray = stringArray.reverse();
      let newarray = stringArray.join("");
      return newarray;
    },
    capitalize: (str) =>{
        let first = str[0].toUpperCase();
        str= str.substring(1,str.length);
        first = first+str;
        return first;
    }
  };
  
  const Calculator = {
    add: (num, num2) => {
      return num + num2;
    },
    mul: (num, num2) => {
      return num * num2;
    },
    div: (num, num2) => {
      return num / num2;
    },
    sub: (num, num2) => {
      return num - num2;
    },
  };

  // Combine both objects into a single object to be exported
  const exportedObjects = {
    functions: functions,
    Calculator: Calculator,
  };

functions.capitalize("mustafa");
  
  module.exports = exportedObjects;
  