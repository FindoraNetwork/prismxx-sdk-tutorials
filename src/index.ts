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
  console.log('Init SDK...');
  await initSdk();

  const findoraSdk = await import('@findora-network/findora-sdk.js');
  const { Asset: AssetApi } = findoraSdk.Api;

  console.log('Get Wallet...');
  const nativeWallet = await getNativeWallet();
  const evmWallet = await getEvmWallet();

  console.log('Run - Native To Evm');

  // console.log('1、[send FRA]');
  // await nativeToEvm(nativeWallet, evmWallet, await AssetApi.getFraAssetCode());

  // console.log('2、[send FRC20]');
  // const frc20AssetCode = await findoraSdk.Api.Evm.hashAddressTofraAddress(
  //   NETWORK_CONFIG.tokens.FRC20,
  // );
  // await nativeToEvm(nativeWallet, evmWallet, frc20AssetCode);

  // console.log('3、[send FRC721]');
  // const frc721AssetCode = await findoraSdk.Api.Evm.hashAddressTofraAddressByNFT(
  //   NETWORK_CONFIG.tokens.FRC721,
  //   '1',
  // );
  // await nativeToEvm(nativeWallet, evmWallet, frc721AssetCode);

  // console.log('4、[send FRC1155]');
  // const frc1155AssetCode =
  //   await findoraSdk.Api.Evm.hashAddressTofraAddressByNFT(
  //     NETWORK_CONFIG.tokens.FRC1155,
  //     '0',
  //   );
  // await nativeToEvm(nativeWallet, evmWallet, frc1155AssetCode);

  console.log('Run - Evm To Native');

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
  // await evmToNativeOfFRC721(
  //   nativeWallet,
  //   evmWallet,
  //   NETWORK_CONFIG.tokens.FRC721,
  //   '0', // tokenID
  // );

  // console.log('4、[send FRC1155]');
  // await evmToNativeOfFRC1155(
  //   nativeWallet,
  //   evmWallet,
  //   NETWORK_CONFIG.tokens.FRC1155,
  //   '0', // tokenID
  //   '1', // token amount
  // );

  console.log('End!');
}

main().catch((err) => console.log(err.message));
