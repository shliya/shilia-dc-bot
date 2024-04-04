import {
  REST,
  Routes,
  ApplicationCommandType,
  ApplicationCommandOptionType,
} from "discord.js";
import dotenv from "dotenv";
dotenv.config();
const connandList = [
  {
    name: "add",
    description: "熱水壺大哥最需要的東西，之一",
    options: [
      {
        name: "addend",
        description: "我要跟誰++",
        type: ApplicationCommandOptionType.String,
      },
      {
        name: "summand",
        description: "誰要跟我++",
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: "minus",
    description: "熱水壺大哥最需要的東西，之二",
    options: [
      {
        name: "minuend",
        description: "我跟跟誰--",
        type: ApplicationCommandOptionType.String,
      },
      {
        name: "subtraction",
        description: "誰要跟我--",
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: "multiplication",
    description: "熱水壺大哥最需要的東西，之三",
    options: [
      {
        name: "multiplier",
        description: "我跟跟誰*",
        type: ApplicationCommandOptionType.String,
      },
      {
        name: "multiplicand",
        description: "誰要跟我*",
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: "division",
    description: "熱水壺大哥最需要的東西，之四",
    options: [
      {
        name: "divisor",
        description: "我跟跟誰/",
        type: ApplicationCommandOptionType.String,
      },
      {
        name: "dividend",
        description: "誰要跟我/",
        type: ApplicationCommandOptionType.String,
      },
    ],
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.DCBOT_TOKEN);

let runCommand = async () => {
  try {
    console.log("現在開始註冊指令，機器人很餓");
    await rest.put(Routes.applicationCommands(process.env.DCBOT_CLIENT_ID), {
      body: connandList,
    });
    console.log("機器人吃飽ㄌ");
  } catch (error) {
    console.error(error);
  }
};
export default runCommand;
