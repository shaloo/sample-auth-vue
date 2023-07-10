import { AuthProvider } from "@arcana/auth";

let authInstance;

//Dev ClientId
//const clientId = "9527cdf585cd31d0bd06bfc1b008accea781404";

//Mainnet ClientId
// App: 'Arc4n4-docx'  ; wallet: '0xbd1127C076c91274B9Ccd6c506817D364bc7ff80'
const clientId = "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063";

export async function getAuthInstance() {
  if (authInstance == null) {
    authInstance = new AuthProvider(clientId, {
      alwaysVisible: true,
      theme: "light",
      position: "right",
    });
    await authInstance.init();
    await authInstance.connect();
  }
  return authInstance;
}
