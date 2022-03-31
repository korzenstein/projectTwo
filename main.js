// Project 2

// We are building a simple word quiz that gives users a hint pulled from a dictionary API
// We will be selecting 60 words that users will need to guess and solve for
// It will be multiple choice - they will be given 3 wrong answers as part of a 4 option page
// At the start there will be a welcome page where you can put your name in 
// Throughout the quiz, correct answers will result in a counter increasing the users score by one or zero
// At the end of 10 questions, the game will finish with an awards page / total correct answers tally displayed
// The game will progress in a linear manner using a "carosel" like feature

// WELCOME PAGE
// A simple form with a text input and a submit button


// QUIZ QUESTION PAGES
// "Quiz Words" will be saved in an array of strings containing our 60 chosen words for the users to play with

quizApp = {}

quizApp.quizWords = ['happy', 'bird', 'dog']

// We will use the Math.random function to pick one of these words randomly and this what'll be called by the dictionary API

// A function will be used to loop through our "Quiz Words" array and randomly choose the other 3 incorrect responses to display 

// Given the array of wrong answers, it will have a conditional to check against the currect correct option (loop through again, if the same as right)

// The dictionary API will return 'hints' = synonyms, definitions, antonyms

// That will then be appended to the screen as one of the 4 multiple choice options that are rendered as radio buttons and labels using InnerHTML

// The "Quiz Words" and submit button will be contained within a form

// The "hints" will be above this form in a header (h2)

// The name of the game/app will be displayed consistenly in the lower right hand as an H1

// A counter will then log if this was correct to a global variable (counter++) or nothing if incorrect

// On submit the form will reload and put and repeat with new options/hint - it will do this 9 more times using a for loop

// FINAL POINTS PAGE

// After all the questions have been answered, the last panel to render will be a total points screen displaying how many were correct