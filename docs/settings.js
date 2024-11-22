const BODY_COLOR = "#1e1f1f"; //          (200 2% 12%)
const SIDEBAR_COLOR = "#161717"; //       (200 2% 9%)
const WORKSPACEBAR_COLOR = "#141515"; //  (200 2% 8%)

const nextStylesheet = document.querySelector("link[data-n-g]").sheet;

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
  [data-tooltip-id="global"] span {
    margin-right: 5px;
    color: #ffc533 !important;
    font-weight: 600 !important;
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

const sidebarCSS = `
  [data-element-id="side-bar-background"] {
    --sidebar-color: ${SIDEBAR_COLOR} !important;
  }
`;

const workspacebarCSS = `
  [data-element-id="workspace-bar"] {
    background-color: ${WORKSPACEBAR_COLOR} !important;
    border-right: 1px solid #262626 !important;
  }
`;

try {
  let length = nextStylesheet.cssRules.length;
  nextStylesheet.insertRule(hoverCSS, length++);
  nextStylesheet.insertRule(codeCSS, length++);
  nextStylesheet.insertRule(costCSS, length++);
  nextStylesheet.insertRule(bodyCSS, length++);
  nextStylesheet.insertRule(sidebarCSS, length++);
  nextStylesheet.insertRule(workspacebarCSS, length++);
} catch (error) {
  console.log(error);
}

console.log("ver 20241108.009");
