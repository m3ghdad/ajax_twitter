class FollowToggle {
  constructor($el, options) {
    this.$el = $el

    this.render();
    this.handleClick();

    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('initial-follow-state') || options.followState;
  }

  render() {
    if (follow()) {
      return "Follow!"
    } else if (unfollow()) {
      return "Unfollow!"
    }
  }

  follow() {
    this.followState === "unfollowed";
  }

  unfollow() {
    this.followState === "followed";
  }

  handleClick(e) {
    e.preventDefault();
    if (unfollow()) {
      $.ajax({
        method: "POST",
        url: "/users/:id/follow",
        dataType: "json"
      })
    }
    else if (follow()) {
      $.ajax({
        method: "DELETE"
        url: "/users"
        dataType: "json"
      })
    }

  }
}



module.exports = FollowToggle;

// Prevent the default action.
// Make a $.ajax request to POST /users/:id/follow
// if we are not following the user (check followState), else, it should make a DELETE request.
// On success of the POST/DELETE, we should toggle the followState and re-render.
// Hint: You probably want to set the dataType option for $.ajax.
// This way you can have jQuery automatically parse the response as JSON. Read the documentation here


ChatMachine.prototype.submitMessage = function (e) {
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: "/messages",
    dataType: "json",
    data: this.$form.serialize(),
    success: function(message){
      this.addMessage(message);
      this.clearForm();
    }.bind(this)
  });
  this.addSpinner();
};
