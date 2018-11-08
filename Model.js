'use strict';

import allTweets from './uw_ischool_tweets';

let tweets = allTweets.map((tweet) => {
    return {text:tweet.text, timestamp:Date.parse(tweet.created_at)}; 
});

// Finish this sorting function
tweets.sort();

export function getRecentTweets() {
    return tweets.slice(0,5);
}

export function searchTweets(searchTerm) {
    return tweets.filter((tweet) => tweet.text.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
}