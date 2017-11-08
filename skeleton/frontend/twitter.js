const FollowToggle = require('./follow_toggle')


and define a document ready callback below.
The callback should call your constructor once for each button.follow-toggle element.
You can use jQuery#each for this, but beware:
the DOM element is the second callback argument; index comes first.

$( () => {
  $('button.follow-toggle').each((idx, btn) => new FollowToggle(btn, {}) );
});
