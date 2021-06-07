const arrayMessages = ['Keep your friends close - The godfather', 'Run Forrest, run - Forest Gump', 'I’ll be back - Teminator', 'Hasta la vista Baby - Teminator 2', 'I love the smell of napalm in the morning - Apocalypse Now', 'May the Force be with you - Star Wars', 'My precious - The Lords of the rings'];
const generator = () => Math.floor(Math.random() * arrayMessages.length); 
const generatedMessage = num1 => `${arrayMessages[num1]}`;
console.log(generatedMessage(generator()));