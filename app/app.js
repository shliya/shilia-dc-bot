import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import Calculate from "../model/calculate.js";
import Parser from "rss-parser";
import SampleDB from "../utils/sampleDb.js";

let runBot = async () => {
  try {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    let parser = new Parser();
    let sampleDb = new SampleDB();
    dotenv.config();

    client.on("ready", () => {
      console.log(`登入成功，我是 ${client.user.tag}`);
      notification();
    });

    let notification = async (interaction) => {
      let dbData = await sampleDb.getJSon();

      setInterval(async () => {
        let data = await parser.parseURL(
          "https://www.youtube.com/feeds/videos.xml?channel_id=UCbsDREyvlriuQtaYiZQfNsA"
        );
        if (dbData.postedVideos.includes(data.items[0].link)) {
          console.log("目前沒有新資料");
          return;
        } else {
          dbData.video = data.items[0];
          dbData.postedVideos.push(data.items[0].link);
          sampleDb.update(dbData);
          console.log("資料更新完畢");
          let message = `鼠有新影片囉 ${dbData.video.title}, 連結在這邊${dbData.video.link}`;
          let guild = await client.guilds.fetch("1121345260019253301");
          let channel = guild.channels.cache.get("1121345261583736924");
          channel.send(message);
        }
      }, 3000);
    };
    client.on("interactionCreate", async (interaction) => {
      try {
        let calculateModel = new Calculate(interaction);
        if (!interaction.isChatInputCommand()) return;
        switch (interaction.commandName) {
          case "ping":
            await interaction.reply("說人話阿");
            break;

          case "add":
            await calculateModel.addFunc();
            break;
          case "minus":
            await calculateModel.minusFunc();
            break;
          case "multiplication":
            await calculateModel.multiplicationFunc();
            break;
          case "division":
            await calculateModel.divisionFunc();
            break;

          default:
            break;
        }
      } catch (error) {
        console.error(error);
      }
    });
    client.login(process.env.DCBOT_TOKEN);
  } catch (error) {
    console.error(error);
  }
};
export default runBot;
