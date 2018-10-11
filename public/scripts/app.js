'use strict';

// Function which takes a Unix Epoch Timestamp and converts it into relative time.
function relativeTime(timeNow, timeStamp) {
  const secondsPast = Math.floor((timeNow - timeStamp) / 1000);
  const minutesPast = Math.floor(secondsPast / 60);
  const hoursPast = Math.floor(minutesPast / 60);
  const daysPast = Math.floor(hoursPast / 24);
  const monthsPast = Math.floor(daysPast / 30);
  const yearsPast = Math.floor(monthsPast / 12);

  let timeAgo;

  if (yearsPast >= 1) {
    timeAgo = `${yearsPast} yr(s) ago`;
  } else if (monthsPast >= 1) {
    timeAgo = `${monthsPast} month(s) ago`;
  } else if (daysPast >= 1) {
    timeAgo = `${daysPast} day(s) ago`;
  } else if (hoursPast >= 1) {
    timeAgo = `${hoursPast} hr(s) ago`;
  } else if (minutesPast >= 1) {
    timeAgo = `${minutesPast} min(s) ago`;
  } else if (secondsPast >= 1) {
    timeAgo = `${secondsPast} sec(s) ago`;
  } else {
    timeAgo = 'just now';
  }
  return timeAgo;
}


// Function which formats and inserts appropriate data to make a new tweet container.
function createTweetElement(data) {
    // const now = new Date().getTime();

  const username = data.user.name;
  const avatar = data.user.avatars.small;
  const handle = data.user.handle;
  const content = data.content.text;
  const timeStamp = relativeTime(new Date().getTime(), data.created_at);

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
            <span class="click-for-likes">
              <span class="likes"></span>
              <i class="fas fa-heart"></i>
            </span>
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

// Function which loops through the database array and passes it through the createTweetElement function.
function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    $('#tweet-container').prepend(createTweetElement(tweet));
  });
}

// Function which obtains the information from MongoDB and passes it through the renderTweets function.
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


// Following two functions are to display a specific error message.
function overCharCountError() {
  $('.error-message')
    .slideDown()
    .html(`<i class="fa fa-times-circle"></i> You're over the character count limit!`);
}
function noInputError() {
  $('.error-message')
    .slideDown()
    .html(`<i class="fa fa-times-circle"></i> You're not tweeting anything!`);
}


$(function() {
  // Loads the initial tweets stored in the MongoDB
  loadTweets();

  /*
   * Code to activate once the submit (Tweet) button is clicked.
   * Validates the form as well as clears, resets and loads if it passes.
  */
  $('#tweet-form').on('submit', function(tweet) {
    tweet.preventDefault();
    $('.error-message').hide();
    if ($('.textArea').val().length > 140) {
      return overCharCountError();
    } else if ($('.textArea').val().length === 0 || $.trim($('.textArea').val()) === '') {
      return noInputError();
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
  $('.compose').click('button', function() {
    $('.new-tweet').slideToggle('slow', function() {
      $('.textArea').focus();
    });
  });


  $('#tweet-container').on("click", ".click-for-likes", function() {
    const tweetLikes = Number($(this).find('.likes').text())+1;
    $(this).find('.likes').text(tweetLikes);
  })

});

