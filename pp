<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8"> <!-- Defines encoding (important for Russian text) -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Makes site responsive -->
  <title>Случайность</title>

  <!-- Linking external CSS file -->
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/stylecubic.css">
  <link rel="stylesheet" href="css/effectscroll.css">
  <link rel="stylesheet" href="css/fortuna.css">
  <link rel="stylesheet" href="fortuna/main.css">    
  <script type="module" src="js/cubic.js"></script>
  <script type="module" src="js/effectscroll.js"></script>
  <script type="module" src="js/fortuna.js"></script>
  <script type="module" src="fortuna/wheel.js"></script>
  
  <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
</head>

<body class="wrapper">

  <!-- Header (top navigation area) -->
  <header>
    <div class="container"> 
      <span class="logo">Random</span>
      <nav>
        <ul>
          <li><a href="#main">Главная</a></li>
          <li><a href="#psy">Психология</a></li>
          <li><a href="#fiz">Физика</a></li>
          <li><a href="#pseudorandom">Псевдослучайность</a></li>
          <li><a href="#quant">Квантовая</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero container">
    <div class="hero-info">
      <h1>СЛУЧАЙНОСТЬ КАК МНОГОУРОВНЕВОЕ ЯВЛЕНИЕ:</h1>
      <p>Почему люди выбирают число 7 и существует ли настоящий рандом?</p>
    </div>
  </section>

  <!-- Content block -->
  <section class="block container">
    <h2>Введение</h2>
    <p>Случайность (randomness) традиционно воспринимается как отсутствие закономерности. Однако в современной науке это понятие является значительно более сложным и многослойным.</p>
  </section>

  <!-- Here is your button and modal code -->
  <button id="openBtn">Мне повезет!</button>

  <!-- Модальное окно -->
  <div id="modalOverlay" style="display: none;">
    <div class="modalBox">
      <h2 class="modalTitle">Испытай Удачу!!!</h2>
      <p class="modalText">Вот это текст, который можно стилизовать отдельно</p>
      <button class="btnfort" id="closeBtn">❌</button>
    </div>
  </div>

  <!-- Here is the wheel code -->
  <div align="center">
    <h1>Winwheel.js example wheel - pins and sound wheel</h1>
    <p>Here is an example of a wheel that contains pins around the outside (these represent the metal rods real prizewheels normally have).</p>
    <br />
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td>
          <div class="power_controls">
            <br />
            <br />
            <table class="power" cellpadding="10" cellspacing="0">
              <tr>
                <th align="center">Power</th>
              </tr>
              <tr>
                <td width="78" align="center" id="pw3" onClick="powerSelected(3);">High</td>
              </tr>
              <tr>
                <td align="center" id="pw2" onClick="powerSelected(2);">Med</td>
              </tr>
              <tr>
                <td align="center" id="pw1" onClick="powerSelected(1);">Low</td>
              </tr>
            </table>
            <br />
            <img id="spin_button" src="spin_off.png" alt="Spin" onClick="startSpin();" />
            <br /><br />
            &nbsp;&nbsp;<a href="#" onClick="resetWheel(); return false;">Play Again</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(reset)
          </div>
        </td>
        <td width="438" height="582" class="the_wheel" align="center" valign="center">
          <canvas id="canvas" width="434" height="434">
            <p style="{color: white}" align="center">Sorry, your browser doesn't support canvas. Please try another.</p>
          </canvas>
        </td>
      </tr>
    </table>
  </div>

  <script>
    // Create new wheel object specifying the parameters at creation time.
    let theWheel = new Winwheel({
      'numSegments'  : 8,
      'outerRadius'  : 212,
      'textFontSize' : 28,
      'segments'     : [
        {'fillStyle' : '#eae56f', 'text' : 'Prize 1'},
        {'fillStyle' : '#89f26e', 'text' : 'Prize 2'},
        {'fillStyle' : '#7de6ef', 'text' : 'Prize 3'},
        {'fillStyle' : '#e7706f', 'text' : 'Prize 4'},
        {'fillStyle' : '#eae56f', 'text' : 'Prize 5'},
        {'fillStyle' : '#89f26e', 'text' : 'Prize 6'},
        {'fillStyle' : '#7de6ef', 'text' : 'Prize 7'},
        {'fillStyle' : '#e7706f', 'text' : 'Prize 8'}
      ],
      'animation' : {
        'type'     : 'spinToStop',
        'duration' : 15,
        'spins'    : 8,
        'callbackFinished' : alertPrize,
        'callbackSound'    : playSound,
        'soundTrigger'     : 'pin'
      },
      'pins' : { 'number' : 16 }
    });

    // Sound and prize functions
    let audio = new Audio('tick.mp3');
    function playSound() { audio.play(); }

    function alertPrize(indicatedSegment) {
      alert("You have won " + indicatedSegment.text);
      openModal(indicatedSegment.text);  // Open modal with prize
    }

    // Modal functions
    const openBtn = document.getElementById('openBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeBtn');

    openBtn.addEventListener('click', function() {
      modalOverlay.style.display = 'flex';  // Show modal
      startSpin();  // Start the wheel spin
    });

    closeBtn.addEventListener('click', function() {
      modalOverlay.style.display = 'none';  // Close modal
:1
});

    function openModal(prize) {
      document.querySelector('.modalText').textContent = `Поздравляем! Вы выиграли: ${prize}`;
      modalOverlay.style.display = 'flex';
    }

    // Wheel spin
    let wheelSpinning = false;
    function startSpin() {
      if (wheelSpinning == false) {
        theWheel.startAnimation();
        wheelSpinning = true;
      }
    }
  </script>

</body>
</html>
