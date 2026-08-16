// src/constants/links.js
// All external URLs in one place. Never hardcode these elsewhere.

export const LINKS = {
  // Core repos
  github_org:       "https://github.com/citadel-foss",
  openswap_repo:    "https://github.com/citadel-foss/openswap",
  taker_app:        "https://github.com/citadel-foss/taker-app",
  maker_dashboard:  "https://github.com/citadel-foss/maker-dashboard",
  maker_dashboard_packaging: "https://github.com/citadel-foss/maker-dashboard/tree/main/packaging",
  openswap_ffi:     "https://github.com/citadel-foss/openswap-ffi",
  mill_io:          "https://github.com/citadel-foss/mill-io",
  rust_coinselect:  "https://github.com/citadel-foss/rust-coinselect",

  // Docs & spec
  taker_docs:        "https://github.com/citadel-foss/openswap/blob/master/docs/taker.md",
  makerd_docs:       "https://github.com/citadel-foss/openswap/blob/master/docs/makerd.md",
  maker_cli_docs:    "https://github.com/citadel-foss/openswap/blob/master/docs/maker-cli.md",
  maker_docker_docs: "https://github.com/citadel-foss/openswap/blob/master/docs/docker.md",
  tor_docs:          "https://github.com/citadel-foss/openswap/blob/master/docs/tor.md",
  protocol_spec:    "https://github.com/citadel-foss/OpenSwap-Protocol-Specification",
  protocol_v2:      "https://github.com/citadel-foss/OpenSwap-Protocol-Specification/tree/main/v2%20protocol",
  protocol_flow:    "https://github.com/citadel-foss/OpenSwap-Protocol-Specification/blob/main/v1%20protocol/protocol-flow.md",
  releases:         "https://github.com/citadel-foss/openswap/releases",
  contributing:     "https://github.com/citadel-foss/openswap/blob/master/CONTRIBUTING.md",
  issues:           "https://github.com/citadel-foss/openswap/issues",

  // Community (Matrix alias as published on the org profile — "ciatdel" is intentional)
  matrix:           "https://matrix.to/#/#ciatdel-foss:matrix.org",
  deep_wiki:        "https://deepwiki.com/citadel-foss/openswap",

  // Testnet (Signet)
  signet:        "https://mempool.citadelfoss.xyz/",
  signet_faucet: "https://faucet.citadelfoss.xyz/",

  // Market data
  market_makers_api: "https://market.citadelfoss.xyz/api/makers",
  market_explorer_tx_base: "https://mempool.citadelfoss.xyz/tx",

  // Taker App screenshots (vendored from the taker-app repo — GitHub raw
  // hotlinks get rate-limited, which intermittently broke the preview)
  screenshot_wallet:  `${import.meta.env.BASE_URL}taker-app/wallet.png`,
  screenshot_swap:    `${import.meta.env.BASE_URL}taker-app/swap.png`,
  screenshot_swap1:   `${import.meta.env.BASE_URL}taker-app/swap1.png`,
  screenshot_report:  `${import.meta.env.BASE_URL}taker-app/report1.png`,

  // Docs raw content bases
  docs_manuals_base:          'https://raw.githubusercontent.com/citadel-foss/openswap/master/docs',
  docs_demo:                  'https://raw.githubusercontent.com/citadel-foss/openswap/master/docs/demo.md',
  docs_examples_base:         'https://raw.githubusercontent.com/citadel-foss/openswap/master/examples',
  docs_spec_base:             'https://raw.githubusercontent.com/citadel-foss/OpenSwap-Protocol-Specification/main',
  docs_ffi_base:              'https://raw.githubusercontent.com/citadel-foss/openswap-ffi/main',
  docs_taker_app_usage:       'https://raw.githubusercontent.com/citadel-foss/taker-app/main/docs/usage.md',
  docs_maker_dashboard_arch:  'https://raw.githubusercontent.com/citadel-foss/maker-dashboard/main/README.md',
  docs_maker_dashboard_packaging_base: 'https://raw.githubusercontent.com/citadel-foss/maker-dashboard/main/packaging',

  // FFI GitHub repo links (for "view on GitHub" buttons)
  ffi_js_repo:     'https://github.com/citadel-foss/openswap-ffi/tree/main/openswap-js',
  ffi_python_repo: 'https://github.com/citadel-foss/openswap-ffi/tree/main/openswap-python',
  ffi_kotlin_repo: 'https://github.com/citadel-foss/openswap-ffi/tree/main/openswap-kotlin',
  ffi_react_native_repo: 'https://github.com/citadel-foss/openswap-ffi/tree/main/openswap-react-native',
  ffi_swift_repo:  'https://github.com/citadel-foss/openswap-ffi/tree/main/openswap-swift',
  ffi_ruby_repo:   'https://github.com/citadel-foss/openswap-ffi/tree/main/openswap-ruby',
  maker_dashboard_mynode_repo: 'https://github.com/citadel-foss/maker-dashboard/tree/main/packaging/mynode',
  maker_dashboard_umbrel_repo: 'https://github.com/citadel-foss/maker-dashboard/tree/main/packaging/umbrel',
};
