document.body.style.backgroundColor = "#252727"; //    (200 2% 15%)
document.body.style.fontFamily = "Inter, Roboto";
document.body.style.fontFeatureSettings = '"liga", "tnum"';

const nextStylesheet = document.querySelector("link[data-n-g]").sheet;

const codeCSS = `
  code, kbd, pre, samp {
    font-family: "JetBrains Mono", SFMono-Regular, ui-monospace, monospace;
    font-size: 1.1em;
  }
`;

// (200 2% 10%)
const sidebarVarCSS = `
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
  nextStylesheet.insertRule(codeCSS, length);
  nextStylesheet.insertRule(sidebarVarCSS, length + 1);
  nextStylesheet.insertRule(workspacebarCSS, length + 2);
} catch (error) {
  // ...
}
