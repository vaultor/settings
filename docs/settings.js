const HUE = 200
const BODY_COLOR = "oklch(0.240 0 0)"
const WORK_COLOR = `oklch(0.195 0.002 ${HUE})`
const SIDE_COLOR = `oklch(0.205 0.002 ${HUE})`
const CHAT_COLOR = `oklch(0.28 0.001 ${HUE})`
const BORDER_COLOR = `oklch(0.28 0.002 ${HUE})`

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
    --sidebar-color: ${SIDE_COLOR} !important;
    --popup-color: hsl(341.77215189873414deg 76% 20%);
    --workspace-color: ${WORK_COLOR} !important;
    --main-dark-color: ${WORK_COLOR} !important;
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
    background-color: ${WORK_COLOR} !important;
  }
`

// Pane 3b (right-bottom)
const pane3bCSS = `
  [data-element-id="chat-space-end-part"] > div[role="presentation"] {
    background-color: ${CHAT_COLOR} !important;
  }
`

const version = "20250802.15"

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

  // const span = document
  //   .querySelector('button[data-element-id="new-chat-button-in-side-bar"]')
  //   ?.querySelector(":scope > span:last-child")
  // if (span) span.textContent = version
} catch (error) {
  console.log(error)
}

console.log(version)
