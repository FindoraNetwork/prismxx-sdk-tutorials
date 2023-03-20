import { WalletKeypar } from '@findora-network/findora-sdk.js/dist/api/keypair';
import { ethers } from 'ethers';
import getNativeHash from '../utils/getNativeHash';
import { NETWORK_CONFIG } from '../config';
import sleep from '../utils/sleep';

export async function nativeToEvm(
  nativeWallet: WalletKeypar,
  evmWallet: ethers.Wallet,
  assetCode: string,
) {
  const findoraSdk = await import('@findora-network/findora-sdk.js');
  const {
    Evm: EvmApi,
    Asset: AssetApi,
    Transaction: TransactionApi,
  } = findoraSdk.Api;

  const transactionBuilder = await EvmApi.sendAccountToEvm(
    nativeWallet,
    '10',
    await evmWallet.getAddress(),
    assetCode,
    '',
  );

  const handle = await TransactionApi.submitTransaction(transactionBuilder);
  await sleep(10 * 6000);

  const hash = await getNativeHash(handle);

  console.log(
    `native to evm (FRA) : ${NETWORK_CONFIG.explorerUrl}/transactionshash?hash=${hash}`,
  );
}
