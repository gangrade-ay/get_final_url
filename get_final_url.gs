function Fetch_url(url) {
  var response = UrlFetchApp.fetch(url, {followRedirects: false});
  return response.getHeaders()['Location'];
}
