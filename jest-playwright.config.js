module.exports = {
  browsers: ["chromium"], // Chromium tabanlı Brave tarayıcı kullanılacak
  launchOptions: {
    executablePath:
      "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser", // Buraya Brave tarayıcı yolunu yazın
    headless: false, // True yaparsanız tarayıcı arayüzü görünmez
  },
  contextOptions: {
    viewport: { width: 1280, height: 720 }, // Tarayıcı penceresi boyutları
  },
};
