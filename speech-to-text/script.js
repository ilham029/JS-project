click_to_convert.addEventListener("click", function () {
  let speech = true;
  const convert_text = document.getElementById("convert_text");


  window.SpeechRecognition = window.webkitSpeechRecognition;
  const voice = new SpeechRecognition();
  voice.interimResults = true;
  voice.lang = "fr-FR";
  // voice.lang = "fr-FR";
  // voice.lang = "en-US";
  // voice.lang = "ar-ma";


  voice.addEventListener("result", e => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join(' ');


    convert_text.value = transcript;
  });

  if (speech == true) {
    voice.start();
  }
});
