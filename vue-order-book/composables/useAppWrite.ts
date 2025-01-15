import { Client, Account, Databases, Storage, ID } from "appwrite";

export const useAppWrite = async () => {
  const config = useRuntimeConfig();
  if (!config.public.APP_WRITE_PROJECT_ID) {
    throw new Error("PROJECT_ID is not set, check environment variables");
  }

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(config.public.APP_WRITE_PROJECT_ID);

  const account = new Account(client);
  const database = new Databases(client);
  const storage = new Storage(client);

  await client.ping();

  return { account, database, storage, ID };
};
