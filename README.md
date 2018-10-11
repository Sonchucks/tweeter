# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Final Product

### What you'll see when you first load the page.

!["Initial look of tweeter page."](https://github.com/Sonchucks/tweeter/blob/master/docs/initial-screen.png)

### After clicking the compose button, shows an area where you can compose a new tweet.

!["After clicking the compose button and bringing up the new tweet form."](https://github.com/Sonchucks/tweeter/blob/master/docs/after-compose-click.png)

### The character count in the bottom right of the new tweet form updates as you type.

!["Character count updating."](https://github.com/Sonchucks/tweeter/blob/master/docs/character-count-update.png)

### If you try to tweet nothing or just spaces, you'll get the following error message.

!["Empty text area."](https://github.com/Sonchucks/tweeter/blob/master/docs/blank-textarea-error.png)

!["Only spaces in text area."](https://github.com/Sonchucks/tweeter/blob/master/docs/only-spaces-textarea-error.png)

### If you go over the character count limit of 140, it'll show you how many characters you're over by in red and if you attempt to submit that tweet, it'll give you the following error message.

!["Over character count limit."](https://github.com/Sonchucks/tweeter/blob/master/docs/over-charcount-limit-error.png)

### The tweets will be posted in reverse chronological order along with showing the relative time that's passed in the bottom left.

!["Reverse chronological order."](https://github.com/Sonchucks/tweeter/blob/master/docs/reverse-chron-order.png)

## Dependencies

- Body-Parser
- Chance
- MD5
- MongoDB
- Express
- Node 5.10.x or above

## Getting Started

- Make sure to install all the dependencies using the npm install command.
- Run the development web server using `npm run local` command.