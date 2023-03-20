import { WalletKeypar } from '@findora-network/findora-sdk.js/dist/api/keypair';
import { ethers } from 'ethers';
import { NETWORK_CONFIG } from '../config';

export async function evmToNativeOfFRC721(
  nativeWallet: WalletKeypar,
  evmWallet: ethers.Wallet,
  assetCode: string,
  tokenId: string,
) {
  const findoraSdk = await import('@findora-network/findora-sdk.js');
  const { bridgeAddress, ledgerAddress } =
    await findoraSdk.Api.Evm.getPrismConfig();
  const { Evm: EvmApi } = findoraSdk.Api;

  const webLinkedInfo = {
    privateStr: NETWORK_CONFIG.evmPrivate,
    rpcUrl: NETWORK_CONFIG.evmUrl,
    chainId: NETWORK_CONFIG.chainId,
    account: await evmWallet.getAddress(),
  };

  let txhResult;

  const approveResult = await EvmApi.approveNFT(
    assetCode,
    ledgerAddress,
    tokenId,
    '721',
    webLinkedInfo,
  );

  console.log(approveResult);
  if (approveResult.status) {
    txhResult = await EvmApi.frcNftToBar(
      bridgeAddress,
      nativeWallet.address,
      assetCode,
      '1',
      tokenId,
      '721',
      webLinkedInfo,
    );
  }

  console.log(
    `evm to native (FRC721) : ${NETWORK_CONFIG.explorerUrl}/transactionshash?hash=${txhResult?.transactionHash}`,
  );
}
