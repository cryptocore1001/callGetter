import buffer from "buffer";
import {
  TonClient,
  TonClient4,
  WalletContractV4,
  Contract,
  ContractProvider,
  Address,
  Cell,
  beginCell,
  storeStateInit,
  JettonMaster,
  JettonWallet,
  OpenedContract,
} from "@ton/ton";
import { getHttpEndpoint, getHttpV4Endpoint } from "@orbs-network/ton-access";

// address link: https://tonviewer.com/EQBjZf-UZaz6YQTkHJ3EBxJpgh6GROxoecRm3vVNcncwHNy9
const counterAddress = Address.parse(
  "EQBjZf-UZaz6YQTkHJ3EBxJpgh6GROxoecRm3vVNcncwHNy9"
);

// Needs rpc endpoint
async function callCounter() {
  try {
    // create ton client
    const tonCenterEndpoint = await getHttpV4Endpoint({
      network: "mainnet",
    });

    const client4 = new TonClient4({
      endpoint: tonCenterEndpoint,
    });

    /* 
    Add ton client code to call counter. It should return 1
    
    console.log to print the result

    */
  } catch (error) {
    console.error(error);
  }
}

async function incrementCounter() {
  try {
    // create ton client
    const tonCenterEndpoint = await getHttpV4Endpoint({
      network: "mainnet",
    });

    const client4 = new TonClient4({
      endpoint: tonCenterEndpoint,
    });

    let mnemonics = await mnemonicNew();

    let keyPair = await mnemonicToPrivateKey(mnenomics);

    let workchain = 0; // Usually you need a workchain 0
    let wallet = WalletContractV4.create({
      workchain,
      publicKey: keyPair.publicKey,
    });
    let walletContract = client4.open(wallet);

    /* 
    Add ton client code to send 'increment' to the contract
    */
  } catch (error) {
    console.error(error);
  }
}

// callCounter();
// incrementCounter();
