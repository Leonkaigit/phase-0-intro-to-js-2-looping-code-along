// Function to write "thank you" messages for each name and return them in an array
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  
  // Example usage of writeCards function
  const names = ["Alice", "Bob", "Charlie"];
  const eventName = "birthday";
  const messages = writeCards(names, eventName);
  console.log(messages);
  
  // Function to count down from a positive integer to 0 using console.log
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  // Example usage of countDown function
  countDown(10);
  