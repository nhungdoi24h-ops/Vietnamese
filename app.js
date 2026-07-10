let voiceList = [];
let isWeChat = /MicroMessenger/i.test(navigator.userAgent);

// 预加载语音库
speechSynthesis.onvoiceschanged = () => {
  voiceList = speechSynthesis.getVoices();
};

// 统一朗读函数，兼容微信
function speak(text) {
  speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "vi-VN";
  speech.rate = 0.8;
  speech.pitch = 1;

  // 优先匹配越南语音色
  const vnVoice = voiceList.find(v => v.lang === "vi-VN" || v.lang.startsWith("vi"));
  if (vnVoice) speech.voice = vnVoice;

  // 微信特殊处理：延迟播放，规避微信音频拦截
  if (isWeChat) {
    setTimeout(() => {
      speechSynthesis.speak(speech);
    }, 100);
  } else {
    speechSynthesis.speak(speech);
  }
}

function explain(vietnamese, chinese) {
  alert(
    "Tiếng Việt: " + vietnamese +
    "\n\nTiếng Trung: " + chinese
  );
}

// 微信强制触发语音初始化（页面点击任意地方激活音频权限）
document.addEventListener('click', () => {
  if (voiceList.length === 0) {
    voiceList = speechSynthesis.getVoices();
  }
}, { once: true });
