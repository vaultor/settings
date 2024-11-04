const BODY_COLOR = "#1e1f1f"; //          (200 2% 12%)
const SIDEBAR_COLOR = "#161717"; //       (200 2% 9%)
const WORKSPACEBAR_COLOR = "#141515"; //  (200 2% 8%)

const nextStylesheet = document.querySelector("link[data-n-g]").sheet;

const codeCSS = `
  code, kbd, pre, samp {
    font-family: "JetBrains Mono", SFMono-Regular, ui-monospace, monospace;
    font-size: 1.1em;
  }
`;

const proseCSS = `
  .prose-sm {
    font-size: 0.9375rem;
    line-height: 1.7142857;
  }
`;

const bodyCSS = `
  body {
    background-color: ${BODY_COLOR} !important;
    font-family: Inter, Roboto ;
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
  nextStylesheet.insertRule(codeCSS, length++);
  // nextStylesheet.insertRule(proseCSS, length++);
  nextStylesheet.insertRule(bodyCSS, length++);
  nextStylesheet.insertRule(sidebarCSS, length++);
  nextStylesheet.insertRule(workspacebarCSS, length++);
} catch (error) {
  // ...
}
