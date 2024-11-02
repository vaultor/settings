const nextStylesheet = document.querySelector("link[data-n-g]").sheet;

const bodyCSS = `
  body {
    background-color: #252727 !important;
    font-family: Inter, Roboto !important;
    font-feature-settings: "liga", "tnum" !important;
  }
`;

const codeCSS = `
  code, kbd, pre, samp {
    font-family: "JetBrains Mono", SFMono-Regular, ui-monospace, monospace;
    font-size: 1.1em;
  }
`;

// (200 2% 10%)
const sidebarCSS = `
  [data-element-id="side-bar-background"] {
    --sidebar-color: #191a1a !important;
  }
`;

// (200 2% 9%)
const workspacebarCSS = `
  [data-element-id="workspace-bar"] {
    background-color: #161717 !important;
    border-color: #303030 !important;
  }
`;

try {
  const length = nextStylesheet.cssRules.length;
  nextStylesheet.insertRule(bodyCSS, length);
  nextStylesheet.insertRule(codeCSS, length + 1);
  nextStylesheet.insertRule(sidebarCSS, length + 2);
  nextStylesheet.insertRule(workspacebarCSS, length + 3);
} catch (error) {
  // ...
}
