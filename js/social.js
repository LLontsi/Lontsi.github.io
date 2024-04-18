var dataJson = [
    {
        "link":"https://www.instagram.com/maurolontsi?igsh=YzlijYTk1ODg3Zg==/",
        "title":"Instagram",
        "icon":"./images/instagram.svg"
    },
    {
        "link":"https://github.com/LLontsi/",
        "title":"https://github.com/LLontsi",
        "icon":"./images/github.svg"
    },
    {
        "link":"https://t.me/lontsi_lambou",
        "title":"Telegram",
        "icon":"./images/telegram.svg"
    },
    {
        "link":"https://www.youtube.com/channel/UCgJftJows8cYmBdkEYpzz2g",
        "title":"YouTube",
        "icon":"./images/youtube.svg"
    },
    {
        "link":"https://wa.me/+237670928363",
        "title":"Whatsapp",
        "icon":"./images/whatsapp.svg"
    }
];

var raw_html = "";
dataJson.forEach(function(item){
    raw_html += `<li>
    <a
      rel="noopener"
      href="${item.link}"
      target="_blank"
      title="${item.title}">
      <img title="${item.title}" src="${item.icon}" class="svg-icon"/>
      </a>
  </li>`;
})

document.getElementById('social-links').innerHTML = `<ul>${raw_html}</ul>`;

