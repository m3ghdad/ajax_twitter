const APIUtil = require('./api_util')

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
    const followToggle = this;
    e.preventDefault();

    if (unfollow()) {
      this.render();
      APIUtil.unfollowUser(this.userId).then(() => {
        followToggle.followState = 'unfollowed';
        followToggle.render();
      });
    }
    else if (follow()) {
      this.render();
      APIUtil.followUser(this.userId).then(() => {
        followToggle.render();
      });
    }
  }
}





module.exports = FollowToggle;
