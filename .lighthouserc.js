module.exports = {
    ci: {
      collect: {
        url: [
          "https://feed-pulse-dev.onrender.com/auth/login",
          "https://feed-pulse-dev.onrender.com/auth/register",
          "https://feed-pulse-dev.onrender.com/dashboard",
        ]
      },
      upload: {
        target: "filesystem",
        outputDir: "./lhci-report"
      }
    }
  };
  