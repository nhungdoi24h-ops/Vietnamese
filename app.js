// 缓存系统语音列表
let voiceList = [];

// 系统语音加载完成后保存音色
speechSynthesis.onvoiceschanged = () => {
  voiceList = speechSynthesis.getVoices();
};

// 越南语朗读统一函数
function speak(text) {
  // 停止当前正在播放的语音，防止重叠
  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "vi-VN";
  speech.rate = 0.8;
  speech.pitch = 1;

  // 优先匹配越南语音色
  const vnVoice = voiceList.find(item => item.lang === "vi-VN" || item.lang.startsWith("vi"));
  if (vnVoice) {
    speech.voice = vnVoice;
  }

  speechSynthesis.speak(speech);
}

// 弹窗解释词义
function explain(vietnamese, chinese) {
  alert(
    "Tiếng Việt: " + vietnamese +
    "\n\nTiếng Trung: " + chinese
  );
}
