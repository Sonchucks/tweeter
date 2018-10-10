'use strict';
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(data) {
  const username = data.user.name;
  const avatar = data.user.avatars.small;
  const handle = data.user.handle;
  const content = data.content.text;
  const timeStamp = data.created_at;

  const format =
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

  const $tweet = $(format);

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

function loadTweets() {
  $.ajax({
    url: '/tweets',
    method: 'GET'
  })
  .done((tweets) => {
    $('#tweet-container').empty();
    renderTweets(tweets);
  });
}

$(function() {
  $('#tweet-form').on('submit', function(tweet) {
    tweet.preventDefault();
    $('.error-message').hide();
    if ($('.textArea').val().length > 140) {
      $('.error-message')
        .slideDown('slow', function() {})
        .html(`<i class="fa fa-times-circle"></i> You're over the character count limit!`);
    } else if ($('.textArea').val().length === 0 || $.trim($('.textArea').val()) === '') {
      $('.error-message')
        .slideDown('slow', function() {})
        .html(`<i class="fa fa-times-circle"></i> You're not tweeting anything!`);
    } else {
      $.ajax('/tweets', {
        method: 'POST',
        data: $(this).serialize()
      })
      .done(function() {
        $('.textArea').val('');
        $('.counter').text(140);
        loadTweets();
      });
    }
  });
  // Toggle new-tweet form
  $('#nav-bar').click('button', function() {
    $('.new-tweet').slideToggle('slow', function() {
      $('.textArea').focus();
    });
  });

});

loadTweets();

