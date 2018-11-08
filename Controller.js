'use strict';

import readline from 'readline-sync';

// Import all the functions from the Model and import the printTweets function
// from the View

export function runSearch() {
  console.log("Here are recent tweets by @UW_iSchool");
  // Print out the most recent tweets using the imported functions

  let searchTerm = readline.question('Search tweets, or EXIT to quit: ')
  if(searchTerm == 'EXIT') 
    return;
  else {
    // Search the model for the given search term
    printTweets(tweets);  
  }
}