$(document).ready(function () {
	oldlines = 0
	chars = 0
	document.addEventListener(
		'DOMNodeInserted',
		function () {
			var lines = document.getElementsByTagName('p').length
			var isnew = lines - oldlines
			if (isnew > 0) {
				var i = lines - 1
				var newline = document.getElementsByTagName('p')[i].innerHTML
				var linechars = newline.length
				newchars = chars + linechars
				var charsdisp = newchars.toLocaleString()
				var linesdisp = lines.toLocaleString()
				jQuery('#counter').text(charsdisp + ' / ' + linesdisp)
				oldlines = lines
				chars = newchars
				var LEEWAY = 200
				var b = document.body
				var offset = b.scrollHeight - b.offsetHeight
				var scrollPos = b.scrollTop + offset
				var scrollBottom = b.scrollHeight - (b.clientHeight + offset)
				if (scrollPos >= scrollBottom - LEEWAY) {
					window.scrollTo(0, document.body.scrollHeight)
				}
			}
		},
		false
	)
	document
		.getElementById('remove_button')
		.addEventListener('click', function () {
			var remove_lines = document.getElementsByTagName('p').length
			if (remove_lines > 0) {
				var q = remove_lines - 1
				var last = document.getElementsByTagName('p')[q].innerHTML
				var lastlen = last.length
				$('body').children('p:last').remove()
				var newch = chars - lastlen
				var newchdisp = newch.toLocaleString()
				var newl = oldlines - 1
				var newldisp = newl.toLocaleString()
				jQuery('#counter').text(newchdisp + ' / ' + newldisp)
				chars = newch
				oldlines = newl
			}
		})
})
