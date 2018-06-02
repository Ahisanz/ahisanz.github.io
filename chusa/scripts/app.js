// youtube API

$(document).ready(function () {
  var key = 'AIzaSyCKc1bIVSfmIPlqP3AoBhTTe6hk7jDZtqk';
  var playlistId = 'PLj69HgJN8WfRDUXUJwJg99rVIj4nzIps1';
  var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

  var options = {
    part: 'snippet',
    key: key,
    maxResults: 10,
    playlistId: playlistId
  }
  loadVids();

  function loadVids() {
      $.getJSON(URL, options, function (data) {
          var id = data.items[0].snippet.resourceId.videoId;
          mainVid(id);
          resultsLoop(data);
      });
  };
  function mainVid(id) {
      $('#video--item1').html(`
        <div class="respon-video">
				    <iframe src="https://www.youtube.com/embed/${id}?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
			`);
  };

  function resultsLoop(data) {
      $.each(data.items, function (i, item) {
        var thumb = item.snippet.thumbnails.medium.url;
        var title = item.snippet.title;
        var desc = item.snippet.description.substring(0, 100);
        var vid = item.snippet.resourceId.videoId;

        $('#video--list').append(`
					<a class="item" data-key="${vid}" href='#video--item1'>
						<img src="${thumb}" alt="" class="thumb">
            <p class="title-video">${title}</p>
				  </a>
				`);
      });
  };

	//youtube CLICK EVENT
  $('main').on('click', 'a', function () {
    var id = $(this).attr('data-key');
      mainVid(id);
  });

  // Galery click event
  $('#galery--bottom img').on('click',function () {
    $('#first-photo').attr('src',$(this).attr('src'))
  });
  // galery larger photo change on CLICK
  $('#galery--top img').on('click', function(){
    var i = $(this).attr('data-key');
    i++
    if (i === 11) {
      i = 1;
      $('#first-photo').attr('src',('./image/galery/chusa-' + i + '.jpg')).attr('data-key', i);
    } else {
      $('#first-photo').attr('src',('./image/galery/chusa-' + i + '.jpg')).attr('data-key', i);
    }
  })
})
