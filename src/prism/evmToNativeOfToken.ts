import { WalletKeypar } from '@findora-network/findora-sdk.js/dist/api/keypair';
import { ethers } from 'ethers';
import { NETWORK_CONFIG } from '../config';

export async function evmToNativeOfToken(
  nativeWallet: WalletKeypar,
  evmWallet: ethers.Wallet,
  assetCode: string,
  assetType: 'FRA' | 'FRC20',
) {
  const findoraSdk = await import('@findora-network/findora-sdk.js');
  const { bridgeAddress, ledgerAddress } =
    await findoraSdk.Api.Evm.getPrismConfig();
  const { Evm: EvmApi } = findoraSdk.Api;

  // evm 相关信息
  const webLinkedInfo = {
    privateStr: NETWORK_CONFIG.evmPrivate,
    rpcUrl: NETWORK_CONFIG.evmUrl,
    chainId: NETWORK_CONFIG.chainId,
    account: await evmWallet.getAddress(),
  };

  let txhResult;
  if (assetType === 'FRA') {
    txhResult = await EvmApi.fraToBar(
      bridgeAddress, // 桥合约地址
      nativeWallet.address, // native 接收者地址
      '10', // 转账金额
      webLinkedInfo,
    );
  }

  if (assetType === 'FRC20') {
    const approveResult = await EvmApi.approveToken(
      assetCode, // 资产
      ledgerAddress, // 账本合约地址
      '10',
      webLinkedInfo,
    );
    if (approveResult.status) {
      txhResult = await EvmApi.frc20ToBar(
        bridgeAddress,
        nativeWallet.address,
        assetCode,
        '10',
        webLinkedInfo,
      );
    }
  }

  console.log(
    `evm to native (${assetType}) : ${NETWORK_CONFIG.explorerUrl}/transactionshash?hash=${txhResult?.transactionHash}`,
  );
}
