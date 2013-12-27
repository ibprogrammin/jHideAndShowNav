jQuery.fn.extend({
    jHideAndShow: function (args) {
        var hiddenControlsHtml = "";
        var elementName = '.' + this.attr('class');
        var totalElements = $(elementName + ' nav a').length;
        
        $(elementName + ' nav a').each(function () {
            if ($(this).index() + 1 >= args.count) {
                if (($(this).index() + 1) == args.count) {
                    if (args.count != totalElements) {
                        hiddenControlsHtml += $(this).clone().wrap('<p>').parent().html();
                        $(this).css("display", "none");
                    }
                } else {
                    hiddenControlsHtml += $(this).clone().wrap('<p>').parent().html();
                    $(this).css("display", "none");
                }
            };
        });
        
        if (totalElements > args.count) {
            $(elementName + ' nav').html($(elementName + ' nav').html() + '<a href="#" class="more-link">' + args.moreText + '</a>');
        }
        $(elementName + ' nav .more-link').click(function () {
            if ($(elementName + ' div.hidden-links').css("display") == "none") {
                $(elementName + ' div.hidden-links').show(args.transitionDuration);
            } else {
                $(elementName + ' div.hidden-links').hide(args.transitionDuration);
            }
        });
        
        $(elementName + ' div.hidden-links').mouseleave(function () { $(this).hide(args.transitionDuration); });
        $(elementName + ' div.hidden-links').html('<nav>' + hiddenControlsHtml + '</nav>');
        $(elementName + ' div.hidden-links').delay(args.transitionDuration).hide(args.transitionDuration);
    }
});
