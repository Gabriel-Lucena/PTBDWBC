document.addEventListener('DOMContentLoaded', function () {
  const favicons = [
    'tumblr_inline_mgg2lh18is1roozkr540.gif',
    'tumblr_inline_mgg2lnHQka1roozkr540.gif',
    'tumblr_lqwdpnsIGo1qcfn0j540.gif',
  ];

  const randomFavicon = favicons[Math.floor(Math.random() * favicons.length)];
  console.log(randomFavicon);

  const faviconLink = document.getElementById('dynamic-favicon');
  faviconLink.href = `./images/${randomFavicon}`;
});