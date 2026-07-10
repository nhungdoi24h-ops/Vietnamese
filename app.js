let voiceList = [];
// 判断是否微信内置浏览器
const isWeChat = /MicroMessenger/i.test(navigator.userAgent);

// 加载全部语音音色缓存
speechSynthesis.onvoiceschanged = () => {
  voiceList = speechSynthesis.getVoices();
};

// 页面点击初始化语音（安卓微信必须用户主动交互解锁音频）
document.addEventListener('click', () => {
  voiceList = speechSynthesis.getVoices();
}, { once: true });

function speak(text) {
  // 停止上一段语音，防止重叠杂音
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "vi-VN";
  utter.rate = 0.8;
  utter.pitch = 1;

  // 优先匹配越南语音色
  const vnVoice = voiceList.find(v => v.lang === "vi-VN" || v.lang.startsWith("vi"));
  if (vnVoice) utter.voice = vnVoice;

  // 微信/安卓延迟播放，规避音频拦截限制
  if (isWeChat) {
    setTimeout(() => {
      speechSynthesis.speak(utter);
    }, 150);
  } else {
    speechSynthesis.speak(utter);
  }
}

function explain(vietnamese, chinese) {
  alert(`Tiếng Việt: ${vietnamese}\n\nTiếng Trung: ${chinese}`);
}
