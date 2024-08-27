/**1. Use an array method to remove the last element from the secretMessage array.
2. Wonderful! You can check your work by displaying the length of the array. Now, the length of ar
should be 1 less than the original length.
3. Use an array method to add the words "to" and "Program" to the end of the array
secretMessage.
4. Change the word "easily" to the word "right" by accessing the index and replacing it.
5. Use an array method to remove the first element from the array.
6. Use an array method to add the string "Programming" to the beginning of the array.
7. Use an array method to remove the strings "get", "right", "the", "first", "time" and
replace them with the string "know".
8. On one line, use console.log() and .join() to display the secret message as a sentence.
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,',
'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn ', 'JavaScript'];*/


let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,',
    'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn ', 'JavaScript'];

//1.Remove the last element from the secretMessage array
secretMessage.pop();

//2. Displaying the length of the array
console.log(secretMessage.length);

//3. Add the words "to" and "Program" to the end
secretMessage.push('to','Program');

//4. Change the word "easily" to the word "right" by accessing the index and replacing it.
let index=secretMessage.indexOf('easily');
secretMessage[index]='right';

//5. Use an array method to remove the first element from the array.
secretMessage.shift();

//6. Use an array method to add the string "Programming" to the beginning of the array.
secretMessage.unshift('Programming');
console.log(secretMessage);

//7. Use an array method to remove the strings "get", "right", "the", "first", "time" and
//replace them with the string "know".
let start=secretMessage.indexOf('get');
let end=secretMessage.indexOf('time');
secretMessage.splice(start, end, 'know');

//8. On one line, use console.log() and .join() to display the secret message as a sentence.

console.log(secretMessage.join(' '));


//Programming is not about what you know get right the first time, 
//it is about what you can figure out. -2015, Chris Pine, Learn  to Program