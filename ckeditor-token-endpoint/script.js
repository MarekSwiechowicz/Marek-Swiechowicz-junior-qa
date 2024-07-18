document.addEventListener("DOMContentLoaded", () => {
  ClassicEditor.create(document.querySelector("#editor"), {
    cloudServices: {
      tokenUrl: "http://localhost:1337/token",
      uploadUrl: "https://113841.cke-cs.com/easyimage/upload/",
      webSocketUrl: "wss://113841.cke-cs.com/ws",
    },
  })
    .then((editor) => {
      console.log("Editor was initialized", editor);
    })
    .catch((error) => {
      console.error("There was a problem initializing the editor:", error);
    });
});
