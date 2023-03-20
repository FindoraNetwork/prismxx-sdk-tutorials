import { NETWORK_CONFIG } from '../config';

export const initSdk = async () => {
  const findoraSdk = await import('@findora-network/findora-sdk.js');
  const { Sdk, CacheProviders } = findoraSdk;

  const sdkEnv = {
    hostUrl: NETWORK_CONFIG.nodeUrl,
    blockScanerUrl: NETWORK_CONFIG.blockScanerUrl,
    cacheProvider: CacheProviders.MemoryCacheProvider,
    cachePath: 'cache',
  };

  Sdk.default.init(sdkEnv);
};
