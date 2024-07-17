import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

// Cloud Services configuration
const CS_CONFIG = {
  tokenUrl:
    "https://113841.cke-cs.com/token/dev/4a1abf790cd1d47214cdd2dba3f057eed3551c2df580520c337f08e113bd?limit=10",
  uploadUrl: "https://113841.cke-cs.com/easyimage/upload/",
  webSocketUrl: "wss://113841.cke-cs.com/ws",
};

DecoupledEditor.create(document.querySelector("#editor"), {
  cloudServices: {
    tokenUrl: CS_CONFIG.tokenUrl,
    uploadUrl: CS_CONFIG.uploadUrl,
    webSocketUrl: CS_CONFIG.webSocketUrl,
  },
})
  .then((editor) => {
    const toolbarContainer = document.createElement("div");
    toolbarContainer.classList.add("document-editor__toolbar");
    editor.ui.view.editable.element.parentElement.insertBefore(
      toolbarContainer,
      editor.ui.view.editable.element
    );
    toolbarContainer.appendChild(editor.ui.view.toolbar.element);

    console.log("Editor was initialized", editor);
  })
  .catch((error) => {
    console.error("There was a problem initializing the editor.", error);
  });
