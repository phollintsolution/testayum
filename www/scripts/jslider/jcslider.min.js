(function ($) {
	var $jcslider = $('.jcslider');
	var ctautoplaySpeed = parseInt($jcslider.attr("data-autoplaySpeed"), 10);
	var ctspeed = parseInt($jcslider.attr("data-speed"), 10);
	var ctfade = parseBoolean($jcslider.attr("data-fade"), false);

	function parseBoolean(str, $defaultValue) {
		if (str == 'true') {
			return true;
		} else if (str == "false") {
			return false;
		}
		return $defaultValue;
	}
	$jcslider.slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: ctautoplaySpeed,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		speed: ctspeed,
		fade: ctfade,
		accessibility: false,
		lazyLoad: 'ondemand'
	}).each(function () {
		var $this = $(this)
		$this.on('beforeChange', function () {
			$this.find(".slick-slide [data-fx]").each(function () {
				var $content = $(this);
				$content.removeClass($content.data('fx')).removeClass("activate");
			});
			setTimeout(function () {
				$this.find(".slick-active [data-fx]").each(function () {
					var $content = $(this);
					if ($content.data('time') !== undefined) {
						setTimeout(function () {
							$content.addClass($content.data('fx')).addClass("activate");
						}, $content.data('time'));
					} else {
						$content.addClass($content.data('fx')).addClass("activate");
					}
				});
			}, 150);
		});
	});
}(jQuery));