const FollowToggle = require('./follow_toggle')
// const APIUtil = require('./api_util')

$( () => {
  $('button.follow-toggle').each((idx, btn) => new FollowToggle(btn, {}) );
});

module.exports = FollowToggle;
