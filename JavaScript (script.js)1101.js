document.getElementById('showLove').addEventListener('click', function() {
    document.getElementById('showLove').style.display = 'none';
    document.getElementById('loveMessage').innerHTML = 'Bom loves Noynha very much na rak fan mak mak EiEi';
    document.getElementById('loveMessage').style.display = 'block';
    document.getElementById('fireworks').style.display = 'block';
    document.getElementById('heartContainer').innerHTML = '';
    for (let i = 0; i < 50; i++) {
      createHeart();
    }
    setTimeout(function() {
      document.getElementById('loveMessage').innerHTML = 'หมูหน่ารักบอมไหม';
      const button1 = document.createElement('button');
      button1.textContent = 'รักบอมค้าบบบ';
      button1.addEventListener('click', function() {
        document.getElementById('loveMessage').innerHTML = 'อัยย้ะๆ';
        button1.style.display = 'none';
        button2.style.display = 'none';
      });
      const button2 = document.createElement('button');
      button2.textContent = 'ไม่รักหรอกงอนแล่ว';
      button2.addEventListener('click', function() {
        document.getElementById('loveMessage').innerHTML = 'ละมึง ค ไร .';
        setTimeout(function() {
          document.getElementById('loveMessage').innerHTML = 'อูยหยอกๆ';
          setTimeout(function() {
            document.getElementById('loveMessage').innerHTML = 'รักหน่าน้าาาาาา';
          }, 3000);
        }, 3000);
        button1.style.display = 'none';
        button2.style.display = 'none';
      });
      document.body.appendChild(button1);
      document.body.appendChild(button2);
    }, 2000);
  });
  
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('heartContainer').appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  