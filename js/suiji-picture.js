var imageUrls = [
    'public/IMG_8020.jpg',
    'public/IMG_8052.jpg',
    'public/IMG_9488_edit_27278297314384.jpg',
    'public/IMG_9924.jpg',
    'public/mmexport1712335118359.jpg',
    'public/mmexport1712335163732.jpg',
    // 这里随机背景壁纸-添加更多图片URL...
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('background');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';
  var imageUrls = [
    'public/omcake.png',
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('bg');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';