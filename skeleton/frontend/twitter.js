const FollowToggle = require('./follow_toggle')

$( () => {
  $('button.follow-toggle').each((idx, btn) => new FollowToggle(btn, {}) );
});
