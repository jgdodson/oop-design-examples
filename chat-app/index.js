

class ChatApp {

  constructor() {

    this.usersById = new Map();
  }

  addUser(user) {
    this.usersById[user.id] = user;
  }

  approveFriendRequest(fromUserId, toUserId) {

    const fromUser = this.usersById[fromUserId];
    const toUser = this.usersById[toUserId];

    // Add to friends list
    fromUser.addFriend(toUser);
    toUser.addFriend(fromUser);

    // Clear requests
    fromUser.clearSentRequest(toUserId);
    toUser.clearReceivedRequest(fromUserId);
  }

  rejectFriendRequest(fromUserId, toUserId) {

    const fromUser = this.usersById[fromUserId];
    const toUser = this.usersById[toUserId];

    // Clear requests
    fromUser.clearSentRequest(toUserId);
    toUser.clearReceivedRequest(fromUserId);
  }
}

class User {

  constructor(id) {

    // User ID
    this.id = id;

    this.friendById = new Map();
    this.groupChatById = new Map();

    // User IDs of all received friend requests
    this.receivedFriendRequestIds = [];

    // User IDs of all sent friend requests
    this.sentFriendRequestIds = [];
  }

  joinGroupChat(groupChat) {

    this.groupChatById[groupChat.id] = groupChat;

    groupChat.addUser(this.id);

  }

  clearSentRequest(userId) {
    this.sentFriendRequestIds = this.sentFriendRequestIds.filter(x => x !== userId);
  }

  clearReceivedRequest(userId) {
    this.receivedFriendRequestIds = this.receivedFriendRequestIds.filter(x => x !== userId)
  }

  addFriend(user) {
    this.friendById[user.id] = user;
  }
}

class GroupChat {

  users = [];
  messages = [];

  constructor() {

  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser() {

  }

  sendMessage(message) {
    this.messages.push(message);
  }
}

class Message {

  constructor(id, body) {
    this.id = id;
    this.body = body;
  }

}
