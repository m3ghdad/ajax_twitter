class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name=username]');
    this.$ul = this.$el.find('.users')
  }

  handleInput(event) {
    event.preventDefault();

    APIUtil.searchUsers(this.$input.val())
  }
}


// Write a UsersSearch#handleInput handler.
// On each input event, call APIUtil.searchUsers,
// sending the input's val as the query parameter.

// Write an APIUtil#searchUsers(queryVal, success)
// to make a request to /users/search.
// You can send query parameters along with
// an $.ajax call through the data. Don't forget to set dataType!
