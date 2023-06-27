var input = prompt("Enter singe Letter for Vowel or Consonant Check");

input = input.toLocaleUpperCase();

if (input == "A" || input == "E" || input == "I" || input == "O" || input == "U"){
    document.write("Your input Letter: " + input + " is vowel.");
}
else document.write("Your input Letter: " + input + " is consonant.");