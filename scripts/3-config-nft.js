import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xbBfC5B49a2e5a9379978ff58661a33768029a4B5");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Library Books",
        description: "This NFT will give you access to EduDAO!",
        image: readFileSync("scripts/assets/librarybooks.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();