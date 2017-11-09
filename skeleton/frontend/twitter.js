const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
// const APIUtil = require('./api_util')

$( () => {
  $('button.follow-toggle').each((idx, btn) => new FollowToggle(btn, {}) );
  $('nav.users-search').each((idx, search) => new UsersSearch(search) );
});
