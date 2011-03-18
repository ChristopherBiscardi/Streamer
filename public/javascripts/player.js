$(document).ready(function() {

		var encoding = "";
		
		var songList = [];
		var currentSong = [];

		
        var audio = new Audio();
        if (audio.canPlayType('application/ogg; codecs="vorbis"') == "probably"
            && (/Chrome/i.test(navigator.userAgent) || !/Safari/i.test(navigator.userAgent))) {
          encoding = 'ogg';
        } else {
          encoding = 'mp3';
        }
        audio.src='/music/' + encoding + '/IRan.mp3';
        audio.setAttribute('controls', true);
        audio.setAttribute('autobuffer', false);
			$('ThePlayer').append(audio);
        audio.load();
        audio.play();
      alert(encoding);

	


	$.ajax({
  url: '/playlist',
  success: function(result){
    $('#playlist ul').html(result);
    $('#playlist ul li').each(function(i){
    	songList.push($(this).attr('rel'));

  });
  }
});
 $('#playlist ul li').live('click', function(){
   	$('audio').detach();
   	$('thePlayer').html("<audio src='/music' controls='controls' autoplay='autoplay'>");
   	$('audio').attr('src', '/music/' + encoding + '/' + $(this).attr('rel'));
   	});
 });