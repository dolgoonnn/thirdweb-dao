import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xCd3d5d6caC134Bf1C4ea7EbA047836165850926d");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Graduation picture",
        description: "This NFT will give you access to BroDaos",
        image: readFileSync("scripts/assets/grad.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();