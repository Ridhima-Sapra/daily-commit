// daily-quote.js

const fs = require('fs');

// List of motivational quotes
const quotes = [
  "Believe you can and you're halfway there.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "You are stronger than you think.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "Little by little, a little becomes a lot.",
  "Great things never come from comfort zones.",
  "Stay positive, work hard, make it happen."
];

// Pick a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Get current UTC date string
const date = new Date().toISOString().split('T')[0]; // e.g., 2025-07-26

// Make the line to add
const line = `${date}: ${randomQuote}\n`;

// Append to daily-quotes.txt
fs.appendFileSync('daily-quotes.txt', line);

console.log('Added daily quote:', line);
