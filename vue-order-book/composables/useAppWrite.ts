import { Client, Account, Databases, Storage, ID } from "appwrite";

const initAppWrite = async () => {
  const config = useRuntimeConfig();
  if (!config.public.APP_WRITE_PROJECT_ID) {
    throw new Error("PROJECT_ID is not set, check environment variables");
  }

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(config.public.APP_WRITE_PROJECT_ID);

  await client.ping();
  return client;
};

let _client: undefined | Client = undefined;

export const useAppWrite = async () => {
  if (!_client) {
    console.warn("Appwrite client is not initialized");
    _client = await initAppWrite();
  }

  const account = new Account(_client);
  const database = new Databases(_client);
  const storage = new Storage(_client);

  return { client: _client, account, database, storage, ID };
};
