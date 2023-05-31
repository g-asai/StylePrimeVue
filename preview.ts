import { createServer } from "vite";
// import yargs from "yargs";
// import { hideBin } from "yargs/helpers";

// 引数でmodeを受け取る
// const argv = yargs(hideBin(process.argv))
//   .option("mode", {
//     demandOption: true,
//   })
//   .help().argv as any;
// console.log("[argv]", argv);

// const mode = argv["mode"];

(async () => {
  try {
    // SecretManagerから値を取得する
    // const secretsManager = await getValueFromSecretManager(mode);
    // console.log("[secretsManager]", secretsManager);
    // const secretString = secretsManager.SecretString;
    // if (!secretString) {
    //   throw new Error("secretsManager is empty");
    // }
    // console.log("[secretsManager]", JSON.parse(secretString));
    // const publicKey = JSON.parse(secretString)["/Stripe/PublishableKey"];
    // console.log("[secretsManager]", publicKey);
    (
      await (
        await createServer({
          configFile: "./vite.config.ts",
          root: "./",
        })
      ).listen()
    ).printUrls();
  } catch (error) {
    console.error("[error]", error);
    return;
  }
})();
