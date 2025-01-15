import { Client, Account, Databases, Storage, ID } from "appwrite";

let client: Client | undefined;

const initAppWriteClient = async () => {
  const config = useRuntimeConfig();
  if (!config.public.APP_WRITE_PROJECT_ID) {
    throw new Error("PROJECT_ID is not set, check environment variables");
  }

  const _client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(config.public.APP_WRITE_PROJECT_ID);

  await _client.ping();
  return _client;
};

export default async () => {
  const config = useRuntimeConfig();
  if (!client) {
    client = await initAppWriteClient();
  }

  const account = new Account(client);
  const database = new Databases(client);
  const storage = new Storage(client);

  const actions = {
    signUp: (email: string, username: string, password: string) => {
      return account.create(username, email, password);
    },
    signIn: (email: string, password: string) => {
      return account.createEmailPasswordSession(email, password);
    },
    recovery: (email: string) => {
      return account.createRecovery(email, config.public.APP_WRITE_DOMAIN);
    },
  };

  return {
    ID,
    client,
    account,
    database,
    storage,
    actions,
  };
};
