class FollowToggle {
  constructor($el, options) {
    this.$el = $el

    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('initial-follow-state') || options.followState
  }
}

module.exports = FollowToggle
