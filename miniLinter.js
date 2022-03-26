let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];
const storyWords = story.split(" ");
const isUnnecessary = (word) => !unnecessaryWords.includes(word);
const betterWords = storyWords.filter(isUnnecessary);

const wordCount = (paragraph) => {
  let count = 0;
  betterWords.forEach((word) => count++);
  return `You have ${count} words in you paragraph.`;
};

const sentenceCount = (paragraph) => {
  let count = 0;
  betterWords.forEach((word) => {
    if (word[word.length - 1] === "." || word[word.length - 1] === "!") count++;
  });
  return `You have ${count} sentence in your paragraph.`;
};

const overusedCount = (paragraph) => {
  let count = 0;
  paragraph.forEach((word) =>
    overusedWords.includes(word) ? count++ : undefined
  );
  return `You have ${count} overused words, please try to make it better.`;
};

console.log(sentenceCount(betterWords));
console.log(wordCount(betterWords));
console.log(overusedCount(betterWords));
console.log("\n");
console.log("Before removing unnecessary words.\n");
console.log(story);
console.log("\n");
console.log("After removing unnecessary words.\n");
console.log(betterWords.join(" "));
