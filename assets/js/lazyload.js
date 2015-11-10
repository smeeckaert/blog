var LazyLoad = LazyLoad || function () {
    return {
        appear: function ($container) {
            $container.find('img[data-appear-src]').each(function () {
                var $this = $(this);
                new Waypoint.Inview({
                    element: $this,
                    enter  : function (direction) {
                        if ($this.attr('data-appear-src')) {
                            $this.attr('src', $this.data('appear-src'));
                            console.log('appearing ' + $this.data('appear-src'));
                            $this.removeAttr('data-appear-src');
                        }
                    }
                });
            });
        }

    }
}();