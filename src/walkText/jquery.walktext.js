/**
 * Simple jQuery plugin to walk through text-nodes
 * @link https://github.com/erkens/jquery-helpers/src/walkText
 * @license MIT License
 * @version 0.1
 */
(function ($) {
    $.fn.walkText = function (callback)
    {
        this.each(function (i, el)
        {
            if (el.hasChildNodes())
            {
                for (var child = el.firstChild; child; child = child.nextSibling)
                {
                    if (child.nodeType == Node.TEXT_NODE)
                    {
                        callback(child);
                    }
                    else
                    {
                        $(child).walkText(callback);
                    }
                }
            }
        });
    }
})(jQuery);