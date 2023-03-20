// Anvil
const NETWORK_CONFIG_ANVIL = {
  nodeUrl: 'https://prod-testnet.prod.findora.org',
  blockScanerUrl: 'https://testnet.backend.findorascan.io',
  explorerUrl: 'https://prod-testnet.findorascan.io',
  private: process.env.NATIVE_PRIVATE,
  evmUrl: 'https://prod-testnet.prod.findora.org:8545',
  chainId: 2153,
  evmPrivate: process.env.EVM_PRIVATE,
  tokens: {
    FRC20: '0x5b15Cdff7Fe65161C377eDeDc34A4E4E31ffb00B',
    FRC721: '0x848bF2788E66E4f1fdE0499048b18D15D1e6E685',
    FRC1155: '0xDFC09ffE02F665c7055Fe145dcDB1b697D58a984',
  },
};

// QA01
const NETWORK_CONFIG_QA01 = {
  nodeUrl: 'https://dev-qa01.dev.findora.org',
  blockScanerUrl: 'https://qa01.backend.findorascan.io',
  explorerUrl: 'https://dev-qa01.findorascan.io',
  private: process.env.NATIVE_PRIVATE,
  evmUrl: 'https://dev-qa01.dev.findora.org:8545',
  chainId: 3333,
  evmPrivate: process.env.EVM_PRIVATE,
  tokens: {
    FRC20: '0x5b15Cdff7Fe65161C377eDeDc34A4E4E31ffb00B',
    FRC721: '0x5dB851A5FCF3D0056AcFA69FB792e333dfEDeD0a',
    FRC1155: '0xD91453cDC11FEcc6fa5EF9e204d10B30953589Ae',
  },
};

export const NETWORK_CONFIG = NETWORK_CONFIG_QA01;
