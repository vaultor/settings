const BODY_COLOR = "#1c1c1c" //       (200 1% 11%)
const WORKSPACE_COLOR = "#141515" //  (200 2% 8%)
const SIDEBAR_COLOR = "#161717" //    (200 2% 9%)
const CHATBOX_COLOR = "#282929" //    (200 1% 16%)
const BORDER_COLOR = "#252727" //     (200 2% 15%)

const nextStylesheet = document.querySelector("link[data-n-g]").sheet

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
`

const codeCSS = `
  code, kbd, pre, samp {
    font-family: "JetBrains Mono", SFMono-Regular, ui-monospace, monospace;
    font-size: 1.1em;
  }
`

const costCSS = `
  [data-tooltip-id="global"] > span:nth-child(1) {
    margin-right: 8px;
    font-size: 0.8em !important;
    font-weight: 600 !important;
    color: #ffc533 !important;
  }
`

const bodyCSS = `
  body {
    background-color: ${BODY_COLOR} !important;
    font-family: InterVariable, "Inter Variable", Inter, Roboto,
    ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-feature-settings: "liga", "tnum";

    --sidebar-menu-color: hsl(341.77215189873414deg 49% 17%);
    --sidebar-color: ${SIDEBAR_COLOR} !important;
    --popup-color: hsl(341.77215189873414deg 76% 20%);
    --workspace-color: ${WORKSPACE_COLOR} !important;
    --main-dark-color: ${WORKSPACE_COLOR} !important;
    --main-dark-popup-color: #1A1C1F;
  }
`

// Pane 1 (left)
// --workspace-color: ${WORKSPACE_COLOR} !important;
const pane1CSS = `
  [data-element-id="workspace-bar"] {
    border-right: 1px solid ${BORDER_COLOR} !important;
  }
`

// Pane 2 (middle-wrapper)
// --sidebar-color: ${SIDEBAR_COLOR} !important;
const pane2CSS = `
  [data-element-id="side-bar-background"] {
    border-right: 1px solid ${BORDER_COLOR} !important;
  }
`
// Pane 2a (middle-top)
// --workspace-color: ${SIDEBAR_COLOR} !important;
const pane2aCSS = `
  [data-element-id="sidebar-beginning-part"] {
    border-right: 1px solid ${BORDER_COLOR} !important;
  }
`

// Pane 2b (middle-bottom)
// no specified background color rule
const pane2bCSS = `
  [data-element-id="sidebar-middle-part"] {
  }
`

// Pane 3a (right-top)
const pane3aCSS = `
  [data-element-id="chat-space-beginning-part"] {
    background-color: ${SIDEBAR_COLOR} !important;
  }
`

// Pane 3b (right-bottom)
const pane3bCSS = `
  [data-element-id="chat-space-end-part"] > div[role="presentation"] {
    background-color: ${CHATBOX_COLOR} !important;
  }
`

const version = "20250802.10"

try {
  let length = nextStylesheet.cssRules.length

  nextStylesheet.insertRule(hoverCSS, length++)
  nextStylesheet.insertRule(codeCSS, length++)
  nextStylesheet.insertRule(costCSS, length++)
  nextStylesheet.insertRule(bodyCSS, length++)
  nextStylesheet.insertRule(pane1CSS, length++)
  nextStylesheet.insertRule(pane2CSS, length++)
  nextStylesheet.insertRule(pane2aCSS, length++)
  nextStylesheet.insertRule(pane3bCSS, length++)

  document.querySelector('button[data-element-id="new-chat-button-in-side-bar"]')
  ?.querySelector(':scope > span:last-child')
  ?.textContent = version

} catch (error) {
  console.log(error)
}

console.log(version)
