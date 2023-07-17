// QUIZ

// array with all the questions, answers, correct buttons to click and alt texts (SANOFIIII)
const questions = [
  // Question 1
  {
    question: "Wątroba nie boli",
    answer:
      "Aby boleć, wątroba musiałaby posiadać nerwy czuciowe, których nie ma. Zawiera je jednak otaczająca ją warstwa tkanki. Uczucie ucisku w okolicach wątroby pojawia się wtedy, gdy - powiększona w wyniku choroby - napiera na otaczającą ją tkankę.<sup>6</sup>",
    correctButton: 0,
    altTxt:
      "Co lubi wątroba? Czy wątroba boli? Kawa a wątroba? Co na regenerację wątroby? Dowiedz się więcej stronie apteki Melissa.",
  },

  // Question 2
  {
    question:
      "Problemy z wątrobą mają tylko osoby nadużywające alkoholu i otyłe",
    answer:
      "Prawda, że nadużywanie alkoholu, zwłaszcza długotrwałe, przyczynia się do uszkodzenia wątroby.<sup>7</sup> Otyłość również źle wpływa na funkcjonowanie wątroby. Ale do czynników powodujących problemy z wątrobą należą także wirusowe zapalenia wątroby, cukrzyca typu drugiego, zespół metaboliczny i długotrwałe przyjmowanie niektórych leków.<sup>8,9</sup>",
    correctButton: 1,
    altTxt:
      "Co to jest polekowe uszkodzenie wątroby, toksyczne uszkodzenie wątroby? Po której stronie jest wątroba? Sprawdź, co wiesz o wątrobie.",
  },

  // Question 3
  {
    question: "Wątroba ma duże zdolności regeneracji",
    answer:
      "Wprawdzie wątroba to narząd, który ma zdolność do regeneracji,<sup>10</sup> ale musimy ją w tym wspierać. Jak? Zredukuj, lub wyeliminuj spożywanie alkoholu. Zastosuj dietę przyjazną dla wątroby, czyli lekkostrawną, bez nadmiernej ilości smażonych i tłustych potraw oraz cukru. Sprawdź nasz poradnik i dowiedz się, jak zadbać o zdrowie Twojej wątroby.",
    correctButton: 1,
    altTxt:
      "Jakie są objawy uszkodzenia wątroby? Otłuszczona wątroba, stres, brak apetytu. Co na regenerację wątroby?",
  },

  // Question 4
  {
    question: "Detoks może zregenerować uszkodzenia wątroby",
    answer:
      "Zdrowa wątroba sama przeprowadza proces detoksykacji. Nie potrzebuje dodatkowego wsparcia z zewnątrz, na przykład w postaci diet sokowych.<sup>10</sup> Aby utrzymać wątrobę w&nbsp;zdrowiu, zmniejsz spożycie cukrów prostych i nasyconych tłuszczów, a także zadbaj o&nbsp;codzienną aktywność fizyczną.<sup>11</sup>",
    correctButton: 1,
    altTxt:
      "Co jest dobre na wątrobę? Co na stłuszczenie wątroby? Oczyszczanie wątroby i dieta wątrobowa, co jeść a czego unikać. ",
  },

  // Question 5
  {
    question: "Kawa nie szkodzi wątrobie",
    answer:
      "Kawa sprzyja m.in. redukcji stłuszczenia i zwłóknienia wątroby, zmniejsza gromadzenie się tłuszczu i odkładanie kolagenu w wątrobie oraz promuje zdolność antyoksydacyjną, poprzez wzrost poziomu glutationu.<sup>12</sup>",
    correctButton: 0,
    altTxt:
      "Jak dbać o wątrobę? Dieta wątrobowa i tabletki na wątrobę pomagają zachować witalność i wspierają wątrobę na co dzień.",
  },

  // Question 6
  {
    question: "Wątroba pełni w naszym organizmie ponad 500 różnych funkcji",
    answer:
      "Wątroba pełni funkcje metaboliczne (gospodarka węglowodanowa, tłuszczowa, wytwarzanie żółci niezbędnej do trawienia tłuszczów), funkcje magazynujące (witaminy oraz żelazo związane z ferrytyną), funkcje odtruwające – dotyczy to m.in. neutralizacji alkoholu i leków.<sup>2</sup> <a href='https://www.apteka-melissa.pl/blog/artykul/jak-dbac-o-watrobe-dieta-ruch-i-inne-sposoby,1003.html' target='_blank'>Dowiedz się więcej o funkcjach wątroby.</a>",
    correctButton: 0,
    altTxt:
      "Jaki jest najlepszy lek na wątrobę? Regeneracja wątroby co jeść? Dowiedz się więcej na stronie apteki internetowej Melissa.",
  },

  // Question 7
  {
    question: "Fosfolipidy niezbędne przyspieszają regenerację wątroby",
    answer:
      "Fosfolipidy niezbędne dzięki zawartości polienilofosfatydylocholiny (PPC) mają zdolność do wbudowywania się w uszkodzone fragmenty błon komórkowych, co przyspiesza regenerację wątroby.<sup>1,9</sup> <a href='https://www.apteka-melissa.pl/blog/artykul/fosfolipidy-co-to-i-dlaczego-sa-niezbednie-watrobie,1212.html' target='_blank'>Dowiedz się więcej o fosfolipidach na stronie Apteki Melissa.</a>",
    correctButton: 0,
    altTxt:
      "Fosfolipidy pomagają w terapii chorób, w toksycznym uszkodzeniu wątroby, wspomagająco w wirusowym zapaleniu wątroby.",
  },

  // Question 8
  {
    question: "Wątroba jest ważna dla układu odpornościowego",
    answer:
      "Wątroba stanowi „filtr” między jelitami a krążeniem ogólnym, może ona wykrywać i&nbsp;rozkładać bakterie, martwe komórki lub szkodliwe cząstki obce, ponadto wątroba produkuje 80-90% białek niezbędnych dla układu immunologicznego.<sup>10</sup>",
    correctButton: 0,
    altTxt:
      "Wątroba a odporność? Co na wzmocnienie organizmu? Wątroba pochłania cząsteczki: bakterie, wirusy, pasożyty.",
  },
];

// generate all the slides
let createSlides = () => {
  for (let i in questions) {
    // create a div alement with a class carousel-item
    let slide = document.createElement("div");
    slide.classList.add("carousel-item");

    // add class "active" for the first slide
    i == 0 ? slide.classList.add("active") : null; 
   
    // set inner HTML for each slide
    slide.innerHTML = 
        `
        <p class="es-quiz__slide-title text-center px-4">Czy wątroba boli? Czy detoks może zregenerować uszkodzenia wątroby? Czy znasz fakty i mity na temat wątroby?</p>

        <div class="es-quiz__question--Ctn p-3 d-flex flex-column justify-content-center align-items-center">
            <div class="es-quiz__question--number text-center">
                ${parseInt(i)+1}
            </div>
            <p class="es-quiz__question--txt text-center">
                ${questions[i].question}
            </p>
        </div>

        <div class="es-quiz__question--answers" id="es-slide--${parseInt(i)+1}">
            <div class="es-quiz__question--buttonsCtn d-flex flex-column align-items-center flex-sm-row justify-content-around gap-3">
                <button class="es-quiz__btn--fact es-quiz__btn--fact--hover">FAKT</button>
                <button class="es-quiz__btn--myth es-quiz__btn--myth--hover">MIT</button>
                <p class="es-quiz__question-mark">?</p>
                <div class="es-quiz__btn--line"></div>
            </div>
            <p class="es-quiz__question--footer text-center">wybierz odpowiedź</p>
            <img class="es-altTxt" alt=""> 
        </div>`;

    slide.querySelector(".es-quiz__btn--fact").addEventListener("click", () => {
      userAnswer(0, i, questions[i].correctButton);
    });
    slide.querySelector(".es-quiz__btn--myth").addEventListener("click", () => {
      userAnswer(1, i, questions[i].correctButton);
    });

    // add reset btn for slide 8
    if (i == 7) {
      slide.querySelector(".es-quiz__btn--fact").addEventListener("click", () => {
        addResetBtn(i);
      });
      slide.querySelector(".es-quiz__btn--myth").addEventListener("click", () => {
        addResetBtn(i);
      });
    }
    // add this whole slide to the DOM inside carousel-inner
    document.querySelector("#carouselQuiz .carousel-inner").appendChild(slide);
  }
};

// remove all the slides
let removeSlides = () => {
  let quizSlides = document.querySelector("#carouselQuiz .carousel-inner");
  while (quizSlides.firstChild) {
    quizSlides.firstChild.remove();
  }
}

// do this when you click on an answer button
let userAnswer = (clickedButton, slideNumber, correctButton) => {
  // declare some variables
  let btnFact = document.getElementsByClassName("es-quiz__btn--fact");
  let btnMyth = document.getElementsByClassName("es-quiz__btn--myth");
  let answer = document.getElementsByClassName("es-quiz__slide-title");
  let answerTxt = document.getElementsByClassName("es-quiz__question--footer");
  let questionMark = document.getElementsByClassName("es-quiz__question-mark");
  let line = document.getElementsByClassName("es-quiz__btn--line");
  let setAltTxt = document.getElementsByClassName("es-altTxt");
  let buttonToHide;
  // check if clicked button is the correct one
  let isCorrect = clickedButton == correctButton; // if the user clicks on the correct button, isCorrect evaluates to true; if user clicks on the wrong button isCorrect returns false

  // if the button was alrady clicked, don't do anything
  if (
    btnFact[slideNumber].classList.contains("alreadyClicked") ||
    btnMyth[slideNumber].classList.contains("alreadyClicked")
  ) {
    return;
  }

  // handle showing the answer (order not important)

  // #1. hide the question mark
  questionMark[slideNumber].style = "display: none";

  // #2. hide the incorrect button and remove hover effects
  // 2.a determine which button to hide based on the correct answer
  if (correctButton == 0) {
    buttonToHide = btnMyth[slideNumber];
    line[slideNumber].style = "background-color: #e85400"; // show the line in orange if the correct button is FACT
  } else {
    buttonToHide = btnFact[slideNumber];
    line[slideNumber].style = "background-color: #000"; // show the line in black if the correct button is MYTH
  };

  // #2.b hide the wrong answer button
  buttonToHide.style = "display: none";

  // #2.c and remove hover effects from both buttons so they won't be suggesting to the user they're clickable
  btnFact[slideNumber].classList.remove("es-quiz__btn--fact--hover");
  btnMyth[slideNumber].classList.remove("es-quiz__btn--myth--hover");

  // #3. display information regarding correctness of the answer and style it
  answer[slideNumber].classList.add("es-quiz__slide-title--showAnswer");
  if (isCorrect) {
    answer[slideNumber].innerHTML = "dobra odpowiedź!";
    answer[slideNumber].style = "color: #FFF";
  } else {
    answer[slideNumber].innerHTML = "zła odpowiedź!";
    answer[slideNumber].style = "color: #000";
  };

  // #4. display the text of the answer and give it a new style (blame the designer)
  answerTxt[slideNumber].innerHTML = questions[slideNumber].answer;
  answerTxt[slideNumber].style =
    "font-family: Noto Sans, sans-serif; line-height: 1.3; font-size: 0.9rem";

  // #5. add alt txt to empty img element to please Sanofi
  setAltTxt[slideNumber].setAttribute("alt", questions[slideNumber].altTxt);

  // #6. add class "alreadyClicked" to both buttons
  btnFact[slideNumber].classList.add("alreadyClicked");
  btnMyth[slideNumber].classList.add("alreadyClicked");

};

// add reset btn to the last slide after revealing the answer
let addResetBtn = () => {
  //display the button
  let resetBtn = document.createElement("button");
  resetBtn.classList.add("es-quiz__resetBtn");
  resetBtn.innerHTML = "Rozwiąż ponownie";
  document.querySelector("#carouselQuiz .carousel-inner #es-slide--8").appendChild(resetBtn);

  // buind a reset function to it
  resetBtn.addEventListener("click", () => {
    removeSlides();
    createSlides();
  })
}

createSlides();