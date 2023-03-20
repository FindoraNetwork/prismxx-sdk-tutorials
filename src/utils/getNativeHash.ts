import axios from 'axios';
import { NETWORK_CONFIG } from '../config';

export default async function getNativeHash(handle: string) {
  const result = await axios.get(`${NETWORK_CONFIG.nodeUrl}:26657/tx_search`, {
    params: {
      query: `"tx.prehash='${handle}'"`,
    },
  });
  console.log(result.data);
  return result.data.result.txs[0]?.hash;
}
