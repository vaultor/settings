const nextStylesheet = document.querySelector("link[data-n-g]").sheet;

const codeCSS = `
  code, kbd, pre, samp {
    font-family: "JetBrains Mono", SFMono-Regular, ui-monospace, monospace;
    font-size: 1.1em;
  }
`;

// (200 2% 12%)
const bodyCSS = `
  body {
    background-color: #1e1f1f;
    font-family: Inter, Roboto ;
    font-feature-settings: "liga", "tnum";
  }
`;

// (200 2% 9%)
const sidebarCSS = `
  [data-element-id="side-bar-background"] {
    --sidebar-color: #161717 !important;
  }
`;

// (200 2% 8%)
const workspacebarCSS = `
  [data-element-id="workspace-bar"] {
    background-color: #141515 !important;
    border-right: 1px solid #262626 !important;
  }
`;

try {
  let length = nextStylesheet.cssRules.length;
  nextStylesheet.insertRule(codeCSS, length++);
  nextStylesheet.insertRule(bodyCSS, length++);
  nextStylesheet.insertRule(sidebarCSS, length++);
  nextStylesheet.insertRule(workspacebarCSS, length++);
} catch (error) {
  // ...
}
