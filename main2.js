document.addEventListener("DOMContentLoaded", function () {
    // Trae todos los elementos llamando a la clase .image1 del css
    var images = document.querySelectorAll(".image1");
  
    // Pa q los gif salgan en posiciones random
    function setRandomPosition(element) {
      element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }
  
    // De nuevo, q sea random
    images.forEach(function (image) {
      setRandomPosition(image);
    });
  });
  
  function angry() {
    // Llama a la clase, la usa y le asigna un gif
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDQ3anhxdTI0NGg3Njl4NTYxazJ5cHhibWJodjlhdXplNWNkejEyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TpsuCxwsNH8gatbpR5/giphy.gif";
  
    absImg.style.display = "flex";
  
    images.forEach(function (image) {
      image.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHZzdDQwc3BxbGhqNDdma2piOGY3dGxnNGp1Z2RjMTRnNG40Yno0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ECipgE6RDp8o5TI7L/giphy.gif";
    });
  }
  function happy() {
    // Cambia el recusrso segun la clase
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    absImg.style.display = "flex";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHQ2aTk1YnJvZWFhdm1vY2kzYWsybGdhNDc0cWRvbmNscGwxd3MxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8YBM61XW2vZJykO0j4/giphy.gif";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
    });
  }
  
  //Gif si elegiste la opcion mala pero necesaria
  const sadCat = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHh2YmQzb2xlejg4bjV2cjVjdnE0Y2Q4cjdxb3N6N3lvcDAxOGc3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ySM2PakMSmw7u/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTBlenozOG50cXR0dXpobjNlZ3Rsa2RhYmVubHJ5MHUwMTIwaG5wbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZbE122VAmvzl3ijeHi/giphy.gif",
    "https://media1.tenor.com/m/w6Wp9srou-UAAAAC/fernanfloo-llorando.gif",
    "https://media1.tenor.com/m/Bi5t9IXWlEkAAAAC/funny-sad-emoji-getting-disintegrated-into-dust.gif",
    "https://media1.tenor.com/m/0pHk1m4M-F4AAAAd/sad-sad-face.gif",
    "https://media1.tenor.com/m/0-PgfxXeVhEAAAAd/sad-cry.gif",
  ];
  
  //Chantaje emocional, como tú comprenderás
  const blackmail = [
    "POR FAVOORRR",
    "Porfa, si?",
    "Ahora sí?",
    "Plis tenkiu",
    "Wa wa wa",
    "Di q sí",
    "Dí que si o me mato",
  ];
  
  //Relajao
  function normal() {
    var absImg = document.getElementById("absImg");
    absImg.style.display = "none";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://media1.tenor.com/m/1f2qPqPaF58AAAAd/wow-meme.gif";
  }
  
  let counter = 0;
  
  function no() {
    counter++;
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");
    happyMusic.pause();
    sadMusic.play();
    let model = document.getElementById("model");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      modelText.innerText =
        blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }
  
  function yes() {
    if (counter >= 3) {
        let model = document.getElementById("model2");
        let model2 = document.getElementById("model");
        let sadMusic = document.getElementById("sadMusic");
        sadMusic.pause();
        model2.style.display = "none";
        let happyMusic = document.getElementById("happyMusic");
        happyMusic.play();
        model.style.display = "none";
        setTimeout(() => {
            model.style.display = "flex";
        }, 100);
        const wedate = document.getElementById("wedate");
        const btns = document.getElementById("btns");
        btns.style.display = "none";
        wedate.innerText = "Feliz 1er aniversario bonito, ahora te jodes, ya estas atrapado conmigo ❤️😘 No voy a dejar escapar a un bellezón como tú tan fácilmente";
 
        // Pa que se abra la otra pagina en una nueva pestaña, siento q asi queda mas comodo, ademas asi puedes ver como queda la pag anterior pq tmb cambia
        window.open("index1.html", "_blank");

    } else {
        alert("No digas que sí tan fácilmente bonito, sabes que me gusta cuando te haces el difícil 😉");
    }
}

  
  function ly2() {
    let model = document.getElementById("model2");
    model.style.display = "none";
    let model2 = document.getElementById("model");
    model2.style.display = "none";
  }
  
