import * as fs from "fs";
export default class SampleDB {
  async getJSon() {
    const response = await fs.readFileSync("./utils/sampleDb.json", "utf8");
    return JSON.parse(response)
  }

  async update(data) {
    fs.writeFileSync("./utils/sampleDb.json", JSON.stringify(data), (err) => {
      console.error(err);
    });
  }
}
