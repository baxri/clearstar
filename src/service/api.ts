import axios from "axios";

export async function getPools() {
  return await axios.get(process.env.POOLS_ENDPOINT as string);
}
export async function getPool(name: string) {
  return await axios.get(
    `${process.env.POOL_HISTORY_ENDPINT}?pool_name=${encodeURIComponent(name)}`
  );
}
