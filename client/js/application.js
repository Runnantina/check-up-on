$(() => {
  $('[data-toggle="tooltip"]').tooltip()
  $("#query").click(function() {
    let twitterHandle = $("#search-field").val()
    $.ajax(`http://localhost:3000/users/${twitterHandle}/get_tweet_text_block`).then((a) => {
      var tweetText = a.tweet_text
      GoogleApi.parseSentiment(tweetText)
    })
  })

})
