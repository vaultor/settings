// const workspace = document.querySelector('[data-element-id="workspace-bar"]');
// workspace.style.backgroundColor = "#161717"; // (200 2% 9%)
// workspace.style.borderColor = "#303030";

// document
//   .querySelector('[data-element-id="side-bar-background"]')
//   .style.setProperty("--sidebar-color", "#191a1a"); // (200 2% 10%)

document.body.style.backgroundColor = "#252727"; //    (200 2% 15%)
document.body.style.fontFamily = "Inter, Roboto";
document.body.style.fontFeatureSettings = '"liga", "tnum"';

const nextStylesheet = document.querySelector("link[data-n-g]").sheet;

const code = `
  code, kbd, pre, samp {
    font-family: "JetBrains Mono", SFMono-Regular, ui-monospace, monospace;
    font-size: 1.1em;
  }


  .bg-\[color\:var\(--sidebar-color\)\] {
    background-color: #161717 !important;
  }
`;

try {
  nextStylesheet.insertRule(code, nextStylesheet.cssRules.length);
} catch (error) {
  // ...
}
