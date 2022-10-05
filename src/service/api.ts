import axios from "axios";

export async function getPools() {
  return await axios.get(
    "https://ye47jgfdotegszjrcpmgydjkfu0mtodv.lambda-url.us-east-1.on.aws/"
  );
}
export async function getPool(name: string) {
  return await axios.get(
    `https://eeug7quabbqg6rr4pgq7akj5za0nunpj.lambda-url.us-east-1.on.aws/?pool_name=${name}`
  );
}
