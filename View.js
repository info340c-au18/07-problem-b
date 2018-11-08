'use strict';


export function printTweets(tweets) {
    // Handle if there are no tweets here
  
    for(let i=0; i < tweets.length; i++){
      let text = tweets[i].text;
      let date = new Date(tweets[i].timestamp).toLocaleString("en-US");
      // Log the tweet out to the console in the correct format
    }
}
