const BODY_COLOR = "#1e1f1f"; //       (200 2% 12%)
const WORKSPACE_COLOR = "#141515"; //  (200 2% 8%)
const SIDEBAR_COLOR = "#161717"; //    (200 2% 9%)
const CHATSPACE_COLOR = "#1e1f1f"; //  (200 2% 8%)
const CHATBOX_COLOR = "#282929"; //    (200 1% 16%)
const BORDER_COLOR = "#262626"; //     (0   0% 15%)

const nextStylesheet = document.querySelector("link[data-n-g]").sheet;

/*
  Important:
  For Brave browser, TURN OFF all shields and configure:
  - Go to Settings > Privacy and security > Site and shields settings.
  - Under Permissions, click Additional permissions, click Fonts.
  - Under Allowed to use fonts installed on your device, click Add.
  - Enter typingmind.com and click Add.
  - Perform a hard refresh.
*/

const hoverCSS = `
  [data-element-id="response-block"]:hover {
    background-color: hsla(0, 0%, 100%, 0.025) !important;
  }
`;

const codeCSS = `
  code, kbd, pre, samp {
    font-family: "JetBrains Mono", SFMono-Regular, ui-monospace, monospace;
    font-size: 1.1em;
  }
`;

const costCSS = `
  [data-tooltip-id="global span:nth-child(1) {
    margin-right: 8px;
    font-size: 0.9em !important;
    color: #ffc533 !important;
  }
`;

const bodyCSS = `
  body {
    background-color: ${BODY_COLOR} !important;
    font-family: Inter, Roboto,
    ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-feature-settings: "liga", "tnum";
  }
`;

// 1st pane (left)
const pane1CSS = `
  [data-element-id="workspace-bar"] {
    background-color: ${WORKSPACE_COLOR} !important;
    border-right: 1px solid ${BORDER_COLOR} !important;
  }
`;

// 2nd pane (middle)
const pane2CSS = `
  [data-element-id="side-bar-background"] {
    --sidebar-color: ${SIDEBAR_COLOR} !important;
    border-right: 1px solid ${BORDER_COLOR} !important;
  }
`;

// 3rd pane (right-top)
const pane3aCSS = `
  [data-element-id="chat-space-beginning-part"] {
    background-color: ${SIDEBAR_COLOR} !important;
  }
`;

// 3rd pane (right-bottom)
// old: chat-space-background
const pane3bCSS = `
  [data-element-id="chat-space-background"] {
    background-color: ${CHATSPACE_COLOR} !important;
  }
`;

// chat box
const chatboxCSS = `
  [data-element-id="chat-space-end-part"] > div {
    background-color: ${CHATBOX_COLOR} !important;
  }
`;

try {
  let length = nextStylesheet.cssRules.length;
  nextStylesheet.insertRule(hoverCSS, length++);
  nextStylesheet.insertRule(codeCSS, length++);
  nextStylesheet.insertRule(costCSS, length++);
  nextStylesheet.insertRule(bodyCSS, length++);
  nextStylesheet.insertRule(pane1CSS, length++);
  nextStylesheet.insertRule(pane2CSS, length++);
  nextStylesheet.insertRule(pane3aCSS, length++);
  nextStylesheet.insertRule(pane3bCSS, length++);
  nextStylesheet.insertRule(chatboxCSS, length++);
} catch (error) {
  console.log(error);
}

console.log("ver 20250113.02");
