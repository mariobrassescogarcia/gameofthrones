var fs = require('fs');
function showEpisode  (error, file) {
  if (error) {
    throw error;
  }

var episodes = JSON.parse(file);

var sortedEpisodes = episodes.sort(function (episode1, episode2) {
    return episode1.episode_number - episode2.episode_number;
  });

var filteredEpisodes = sortedEpisodes.filter( function (episode) {
    return episode.rating > 8.5; });

filteredEpisodes.forEach(function (episode) {
  var starRating = parseInt(episode.rating);
  var starsNumber = [];
  while (starRating > 0) {
    starsNumber.push("*");
    starRating--;
  }
  console.log("Title: " + episode.title + " Episode #: " + episode.episode_number + "\n" + episode.description + " \nRating: " + episode.rating + " " + starsNumber.join(""));
  });
}

fs.readFile("./got.json", "utf-8", showEpisode);

