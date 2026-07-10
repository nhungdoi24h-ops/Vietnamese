function speak(text){

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "vi-VN";

    speech.rate = 0.8;

    speech.pitch = 1;

    speechSynthesis.speak(speech);

}

function explain(vietnamese, chinese){

    alert(
        "Tiếng Việt: " + vietnamese +
        "\n\nTiếng Trung: " + chinese
    );

}