function speak(text) {
    window.speechSynthesis.cancel(); // Hủy lệnh cũ ngay lập tức[span_2](start_span)[span_2](end_span)
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "vi-VN"; // Đặt ngôn ngữ Việt Nam[span_3](start_span)[span_3](end_span)[span_4](start_span)[span_4](end_span)
    speech.rate = 0.8;    // Tốc độ mềm mại[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span)
    speech.pitch = 1;     // Giọng cố định[span_7](start_span)[span_7](end_span)
    window.speechSynthesis.speak(speech);
}
