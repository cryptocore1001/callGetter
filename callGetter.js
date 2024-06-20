import { TonClient, Address, Cell, beginCell, storeStateInit } from "@ton/ton";
import { getHttpV4Endpoint } from "@orbs-network/ton-access";

const counterAddress = Address.parse("EQBjZf-UZaz6YQTkHJ3EBxJpgh6GROxoecRm3vVNcncwHNy9");

async function callCounter() {
  try {
    const tonCenterEndpoint = await getHttpV4Endpoint({
      network: "mainnet",
    });

    const client = new TonClient({
      endpoint: tonCenterEndpoint,
    });

    const query = {
      address: counterAddress,
      functionName: "counter",
    };

    const result = await client.query({
      query,
    });

    console.log("Counter value:", result.value);
  } catch (error) {
    console.error(error);
  }
}

async function incrementCounter() {
  try {
    const tonCenterEndpoint = await getHttpV4Endpoint({
      network: "mainnet",
    });

    const client = new TonClient({
      endpoint: tonCenterEndpoint,
    });

    const message = {
      address: counterAddress,
      functionName: "increment",
    };

    const result = await client.sendMessage({
      message,
    });

    console.log("Message sent. Transaction hash:", result.transaction.id);
  } catch (error) {
    console.error(error);
  }
}

callCounter();
incrementCounter();