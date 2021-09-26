const generatePassword = (config) => {
  const characters = {
    numbers: "0 1 2 3 4 5 6 7 8 9",
    symbols: "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /",
    capitalLetters: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    lowcase: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  };

  let finalCharacters = "";
  let password = "";

  for (let properties in config) {
    if (config[properties] === true) {
      finalCharacters += characters[properties] + " ";
    }
  }

  finalCharacters += characters.lowcase;
  finalCharacters = finalCharacters.trim();

  finalCharacters = finalCharacters.split(' ');

  for(let i = 0; i < config.charactersNumber; i++){
    password += finalCharacters[Math.floor(Math.random() * finalCharacters.length)]
  }
  
     return password;
};

export default generatePassword;
