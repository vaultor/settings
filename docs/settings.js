const workspace = document.querySelector('[data-element-id="workspace-bar"]');
workspace.style.backgroundColor = "#19181A";
workspace.style.borderColor = "#303030";

document
  .querySelector('[data-element-id="side-bar-background"]')
  .style.setProperty("--sidebar-color", "#221F22");

document.body.style.backgroundColor = "#272527";
document.body.style.fontFamily = "Inter, Roboto";
document.body.style.fontFeatureSettings = '"liga", "tnum"';

const nextStylesheet = document.querySelector("link[data-n-g]").sheet;

const code = `
  code, kbd, pre, samp {
    font-family: "JetBrains Mono", SFMono-Regular, ui-monospace, monospace;
    font-size: 1.1em;
  }
`;

try {
  nextStylesheet.insertRule(code, nextStylesheet.cssRules.length);
} catch (error) {
  // If access is restricted, create a new stylesheet instead
  const style = document.createElement("style");
  style.textContent = code;
  document.head.appendChild(style);
}
