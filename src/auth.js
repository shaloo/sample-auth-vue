import { AuthProvider } from "@arcana/auth";

let authInstance;

const clientId = "xar_dev_19527cdf585cd31d0bd06bfc1b008accea781404";

export async function getAuthInstance() {
  if (authInstance == null) {
    authInstance = new AuthProvider(clientId, {
      alwaysVisible: true,
      theme: "light",
      position: "right",
      connectOptions: {
        compact: true
      }
    });
    await authInstance.init();
    await authInstance.connect();
  }
  return authInstance;
}
