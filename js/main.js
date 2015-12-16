// Api key is AIzaSyCxjO1SxYey8isdNQwMWNhNrt3kzdC8k2E

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyCxjO1SxYey8isdNQwMWNhNrt3kzdC8k2E',
    q: searchTerm
  };

  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
    console.log(data.items);
  });
}

$(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#search-term').val();
    getRequest(searchTerm);
  });
});

function showResults(results) {
  var html = JSON.stringify(results);
  $.each(results, function() {
    console.log(results);
    html += '<p>' + + '</p>';
  });
  $('#search-results').html(html);
}

// item.snippet.thumbnails.medium.url