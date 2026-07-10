/*
=====================================================
Audio Manager
Version : 1.0
Author  : ChatGPT
=====================================================
*/

class AudioManager {

    constructor() {

        this.lang = "vi-VN";

        this.rate = 0.9;

        this.pitch = 1;

        this.volume = 1;

        this.voice = null;

        this.isReady = false;

        this.loadVoice();

    }

    loadVoice() {

        const load = () => {

            const voices = speechSynthesis.getVoices();

            if (!voices.length) return;

            // Ưu tiên giọng tiếng Việt
            this.voice =
                voices.find(v => v.lang === "vi-VN") ||
                voices.find(v => v.lang.startsWith("vi")) ||
                null;

            this.isReady = true;

            console.log("Voice:", this.voice);

        };

        load();

        speechSynthesis.onvoiceschanged = load;

    }

    stop() {

        speechSynthesis.cancel();

    }

    pause() {

        speechSynthesis.pause();

    }

    resume() {

        speechSynthesis.resume();

    }

    speak(text) {

        if (!text) return;

        this.stop();

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = this.lang;

        speech.rate = this.rate;

        speech.pitch = this.pitch;

        speech.volume = this.volume;

        if (this.voice) {

            speech.voice = this.voice;

        }

        speech.onerror = (e) => {

            console.error("Speech Error:", e);

        };

        speech.onstart = () => {

            console.log("▶", text);

        };

        speech.onend = () => {

            console.log("✔ Hoàn thành");

        };

        speechSynthesis.speak(speech);

    }

    speakLetter(letter) {

        this.speak(letter);

    }

    speakWord(word) {

        this.speak(word);

    }

    speakSentence(sentence) {

        this.speak(sentence);

    }

    setRate(rate) {

        this.rate = rate;

    }

    setPitch(pitch) {

        this.pitch = pitch;

    }

    setVolume(volume) {

        this.volume = volume;

    }

}

const audio = new AudioManager();