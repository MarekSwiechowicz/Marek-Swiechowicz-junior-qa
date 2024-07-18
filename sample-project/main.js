import {
  ClassicEditor,
  AccessibilityHelp,
  Autosave,
  Bold,
  CloudServices,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  SelectAll,
  Undo,
} from "ckeditor5";
import {
  Comments,
  PresenceList,
  RealTimeCollaborativeComments,
  RealTimeCollaborativeEditing,
  RealTimeCollaborativeRevisionHistory,
  RealTimeCollaborativeTrackChanges,
  RevisionHistory,
  TrackChanges,
  TrackChangesData,
} from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import "./style.css";

const LICENSE_KEY =
  "OFplNStwcW1RbVdnd2tleFFDazMzeG9wN2YxSy80SDVGRnlseGFXckJ0Q0NpajIzYzlFbVZqM0RqR2gzSlE9PS1NakF5TkRBNE1UWT0=";
const UNIQUE_CHANNEL_PER_DOCUMENT = "document_1";
const CLOUD_SERVICES_TOKEN_URL =
  "https://113841.cke-cs.com/token/dev/qjvhvO6Ij4BNqQLI0aF5VeqEBLs9fW4oRLKz?limit=10";
const CLOUD_SERVICES_WEBSOCKET_URL = "wss://113841.cke-cs.com/ws";

const editorConfig = {
  toolbar: {
    items: [
      "undo",
      "redo",
      "|",
      "revisionHistory",
      "trackChanges",
      "comment",
      "commentsArchive",
      "|",
      "selectAll",
      "|",
      "bold",
      "italic",
      "|",
      "accessibilityHelp",
    ],
    shouldNotGroupWhenFull: false,
  },
  plugins: [
    AccessibilityHelp,
    Autosave,
    Bold,
    CloudServices,
    Comments,
    Essentials,
    Italic,
    Mention,
    Paragraph,
    PresenceList,
    RealTimeCollaborativeComments,
    RealTimeCollaborativeEditing,
    RealTimeCollaborativeRevisionHistory,
    RealTimeCollaborativeTrackChanges,
    RevisionHistory,
    SelectAll,
    TrackChanges,
    TrackChangesData,
    Undo,
  ],
  cloudServices: {
    tokenUrl: CLOUD_SERVICES_TOKEN_URL,
    webSocketUrl: CLOUD_SERVICES_WEBSOCKET_URL,
  },
  collaboration: {
    channelId: UNIQUE_CHANNEL_PER_DOCUMENT,
  },
  comments: {
    editorConfig: {
      extraPlugins: [Bold, Italic, Mention],
      mention: {
        feeds: [],
      },
    },
  },
  initialData:
    "<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou've successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What's next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor's\n\t\tconfiguration to match your application's style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don't hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<p>\n\t<i>An editor without the </i><code>Link</code>\n\t<i>plugin? That's brave! We hope the links below will be useful anyway </i\n\t>😉\n</p>\n<ul>\n\t<li>\n\t\t📝 Trial sign up: https://orders.ckeditor.com/trial/premium-features,\n\t</li>\n\t<li>\n\t\t📕 Documentation:\n\t\thttps://ckeditor.com/docs/ckeditor5/latest/installation/index.html,\n\t</li>\n\t<li>\n\t\t⭐️ GitHub (star us if you can!): https://github.com/ckeditor/ckeditor5,\n\t</li>\n\t<li>🏠 CKEditor Homepage: https://ckeditor.com,</li>\n\t<li>🧑‍💻 CKEditor 5 Demos: https://ckeditor.com/ckeditor-5/demo/</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser's\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n",
  licenseKey: LICENSE_KEY,
  mention: {
    feeds: [],
  },
  placeholder: "Type or paste your content here!",
  presenceList: {
    container: document.querySelector("#editor-presence"),
  },
  revisionHistory: {
    editorContainer: document.querySelector("#editor-container"),
    viewerContainer: document.querySelector("#editor-revision-history"),
    viewerEditorElement: document.querySelector(
      "#editor-revision-history-editor"
    ),
    viewerSidebarContainer: document.querySelector(
      "#editor-revision-history-sidebar"
    ),
    resumeUnsavedRevision: true,
  },
  sidebar: {
    container: document.querySelector("#editor-annotations"),
  },
};

ClassicEditor.create(document.querySelector("#editor"), editorConfig);
