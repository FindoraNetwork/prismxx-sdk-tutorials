import { NETWORK_CONFIG } from '../config';
import { ethers } from 'ethers';

export async function getNativeWallet() {
  const findoraSdk = await import('@findora-network/findora-sdk.js');

  const { Keypair } = findoraSdk.Api;

  const wallet = await Keypair.restoreFromPrivateKey(
    NETWORK_CONFIG.private,
    '123456789Lzp.',
  );

  return wallet;
}

export async function getEvmWallet() {
  const provider = new ethers.providers.JsonRpcProvider(
    NETWORK_CONFIG.evmUrl,
    NETWORK_CONFIG.chainId,
  );

  const wallet = new ethers.Wallet(NETWORK_CONFIG.evmPrivate, provider);

  return wallet;
}
