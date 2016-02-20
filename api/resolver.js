module.exports = function(req, res) {
  var url = req.query.url.trim();

  var matches = url.match(/\-([0-9]+)(\?[a-zA-Z0-9=&]+)?$/);
  if (!matches) {
    res.status(400).send('Invalid URL format');
    return;
  }

  var id     = matches[1].split('?')[0];
  var width  = 600;
  var height = 250;
  var html   = "<div style='width:" + width + "px; text-align:left;' >" +
               "<iframe  src='http://eventbrite.com/tickets-external?eid=" + id + "&ref=etckt' " +
                        "frameborder='0' height='" + height + "px' width='100%' " +
                        "vspace='0' hspace='0' marginheight='5' " + "marginwidth='5' " +
                        "scrolling='auto' allowtransparency='true'>" +
               "</iframe> </div>";
  res.json({
    body: html
  });
};
