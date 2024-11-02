// const workspace = document.querySelector('[data-element-id="workspace-bar"]');
// workspace.style.backgroundColor = "#161717"; // (200 2% 9%)
// workspace.style.borderColor = "#303030";

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

const sidebarVarCSS = `
  [data-element-id="side-bar-background"] {
    --sidebar-color: #191a1a !important;
  }
`;

const workspacebarCSS = `
  [data-element-id="workspace-bar"] {
    background-color: #161717 !important;
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
