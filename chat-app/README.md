# Chat App

In this problem, you are asked to design a chat app

[Here](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/online_chat/online_chat.ipynb)
you can find the origin of this problem in the famous [system-design-primer](https://github.com/donnemartin/system-design-primer) repo
on github.

## Use Cases

Assume we'll focus on the following workflows:
- Text conversations only
- Users
    - Add a user
    - Remove a user
    - Update a user
    - Add to a user's friends list
    - Add friend request
    - Approve friend request
    - Reject friend request
    - Remove from a user's friends list
- Create a group chat
    - Invite friends to a group chat
    - Post a message to a group chat
- Private 1-1 chat
    - Invite a friend to a private chat
    - Post a meesage to a private chat
- No need to worry about scaling initially
