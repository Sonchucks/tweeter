/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    'user': {
      'name': 'Newton',
      'avatars': {
        'small':   'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
        'regular': 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
        'large':   'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png'
      },
      'handle': '@SirIsaac'
    },
    'content': {
      'text': 'If I have seen further it is by standing on the shoulders of giants'
    },
    'created_at': 1461116232227
  },
  {
    'user': {
      'name': 'Descartes',
      'avatars': {
        'small':   'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
        'regular': 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
        'large':   'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png'
      },
      'handle': '@rd' },
    'content': {
      'text': 'Je pense , donc je suis'
    },
    'created_at': 1461113959088
  },
  {
    'user': {
      'name': 'Johann von Goethe',
      'avatars': {
        'small':   'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
        'regular': 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
        'large':   'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png'
      },
      'handle': '@johann49'
    },
    'content': {
      'text': 'Es ist nichts schrecklicher als eine tätige Unwissenheit.'
    },
    'created_at': 1461113796368
  }
];

function createTweetElement(data) {
 let username = data.user.name;
 let avatar = data.user.avatars.small;
 let handle = data.user.handle;
 let content = data.content.text;
 let timeStamp = data.created_at;
 let html =
    `<article class="tweet">
      <header>
        <img class="profile-pic" src="">
        <h3 class="username"></h3>
        <span class="handle"></span>
      </header>
      <main>
        <p class="content"></p>
      </main>
      <footer>
        <span class="time-made"></span>
        <div class="icons">
          <a href="#"><i class="fas fa-flag"></i></a>
          <a href="#"><i class="fas fa-retweet"></i></a>
          <a href="#"><i class="fas fa-heart"></i></a>
        </div>
      </footer>
    </article>`;

  let $tweet = $(html);

  $tweet.find('.profile-pic').attr('src', avatar);
  $tweet.find('.username').text(username);
  $tweet.find('.handle').text(handle);
  $tweet.find('.content').text(content);
  $tweet.find('.time-made').text(timeStamp);

  return $tweet;
}

function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    $('#tweet-container').prepend(createTweetElement(tweet));
  });
}

renderTweets(data);

});