function addReportTemplate() {
  var descText = `<a href="//forum.freecadweb.org/viewtopic.php?f=3&t=5236">Read this before reporting</a> 
  and make a <a href="https://forum.freecadweb.org/viewforum.php?f=3">forum thread asking for help</a> 
  <em>first</em> if you aren't sure it's a bug!`;

  var stepsText = `Include a detailed, step-by-step list for bugs.
We can't fix a bug we can't reproduce.`;

  var infoText = `Paste the contents of Help > About FreeCAD > "Copy to
clipboard".
<br><br>
Running a debug release? Publish a <a href="http://www.freecadweb.org/wiki/Debugging">debugging backtrace</a>.
<br><br>
File too large? Upload to a cloud-based 3rd party service like Nextcloud or Dropbox,
and paste the link here.`;

  var exclamationTriangle = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
  
  var descHtml = '<br><br>' + exclamationTriangle + ' <span class="red">' + descText + '</span>';
  var stepsHtml = '<br><br>' + exclamationTriangle + ' <span class="red">' + stepsText + '</span>';
  var infoHtml = '<br><br>' + exclamationTriangle + ' <span class="red">' + infoText + '</span>';

  $('label[for=description]').after(descHtml);
  $('label[for=steps_to_reproduce]').after(stepsHtml);
  $('label[for=additional_info]').after(infoHtml);
}

function swapButtons() {
  // List items containing "button"
  readThis = $('li a span:contains("Read this")').parent().parent();
  viewIssues = $('li a span:contains("View Issues")').parent().parent();

  readThis.insertAfter(viewIssues);
}

$(document).ready(function () {
  swapButtons();
  var pageTitle = $(document).attr("title");
  if (pageTitle === "Report Issue - FreeCAD Tracker") {
    addReportTemplate();
  }
});
