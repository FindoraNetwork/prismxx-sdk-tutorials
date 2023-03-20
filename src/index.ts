import * as dotenv from 'dotenv';
import { initSdk } from './utils/sdkInit';
import { getNativeWallet, getEvmWallet } from './utils/getWallet';
import {
  nativeToEvm,
  evmToNativeOfToken,
  evmToNativeOfFRC721,
  evmToNativeOfFRC1155,
} from './prism';
import { NETWORK_CONFIG } from './config';

dotenv.config();

async function main() {
  console.log('初始化SDK...');
  await initSdk();

  const findoraSdk = await import('@findora-network/findora-sdk.js');
  const { Asset: AssetApi } = findoraSdk.Api;

  console.log('获取钱包信息...');
  const nativeWallet = await getNativeWallet();
  const evmWallet = await getEvmWallet();

  console.log('启动 - Native To Evm');

  // console.log('1、[send FRA]');
  // await nativeToEvm(nativeWallet, evmWallet, await AssetApi.getFraAssetCode());

  // console.log('2、[send FRC20]');
  // const frc20AssetCode = await findoraSdk.Api.Evm.hashAddressTofraAddress(
  //   NETWORK_CONFIG.tokens.FRC20,
  // );
  // await nativeToEvm(nativeWallet, evmWallet, frc20AssetCode);

  // console.log('3、[send FRC721]');
  // const frc721AssetCode = await findoraSdk.Api.Evm.hashAddressTofraAddressByNFT(
  //   NETWORK_CONFIG.tokens.FRC721, // evm 上对应的 NFT合约地址
  //   '1', // evm 上对应的 nft tokenID
  // );
  // await nativeToEvm(nativeWallet, evmWallet, frc721AssetCode);

  // console.log('4、[send FRC1155]');
  // const frc1155AssetCode =
  //   await findoraSdk.Api.Evm.hashAddressTofraAddressByNFT(
  //     NETWORK_CONFIG.tokens.FRC1155, // evm 上对应的 NFT合约地址
  //     '0', // evm 上对应的 nft tokenID
  //   );
  // await nativeToEvm(nativeWallet, evmWallet, frc1155AssetCode);

  console.log('启动 - Evm To Native');

  // console.log('1、[send FRA]');
  // await evmToNativeOfToken(
  //   nativeWallet,
  //   evmWallet,
  //   '0x0000000000000000000000000000000000001000',
  //   'FRA',
  // );

  // console.log('2、[send FRC20]');
  // await evmToNativeOfToken(
  //   nativeWallet,
  //   evmWallet,
  //   NETWORK_CONFIG.tokens.FRC20,
  //   'FRC20',
  // );

  // console.log('3、[send FRC721]');
  await evmToNativeOfFRC721(
    nativeWallet,
    evmWallet,
    NETWORK_CONFIG.tokens.FRC721,
    '0', // tokenID
  );

  // console.log('4、[send FRC1155]');
  // await evmToNativeOfFRC1155(
  //   nativeWallet,
  //   evmWallet,
  //   NETWORK_CONFIG.tokens.FRC1155,
  //   '0', // tokenID
  //   '1', // token amount , nft 1155 的转账数量
  // );

  console.log('结束');
}

main().catch((err) => console.log(err.message));
