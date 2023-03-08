import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener('click', this.handleClick.bind(this))
  }

  async handleClick(event) {
    event.preventDefault();
    if (this.followState === "followed") {
      this.unfollow();
    } else {
      // debugger
      this.follow();
    }
    // this.followState === "followed" ? this.unfollow() : this.follow();
    console.log(this.followState);
  }

  async follow() {
    // debugger
    API.followUser()
    // Your code here
    // this.followState("unfollowed")
  }

  async unfollow() {
    API.unfollowUser()

    // Your code here
    // this.followState("followed")

  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}