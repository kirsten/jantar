var upcomingEl = document.getElementById("upcoming");
var pastEl = document.getElementById("past");

function pastShows() {
  var pastShows = [];

  for(var i = 0; i < upcomingEl.children.length; i++) {
    var element = upcomingEl.children[i];
    var today = new Date();
    var dateOfShow = new Date(element.dataset.showDate);

    if (dateOfShow < today) {
      pastShows.push(element);
    }
  }

  return pastShows;
}

function movePastShows(shows) {
  if (shows.length === 0) { return; }

  for(var i = 0; i < shows.length; i++) {
    pastEl.insertBefore(shows[i], pastEl.childNodes[0]);
  }
}

if (upcomingEl.children.length > 0) {
  movePastShows(pastShows());
}

