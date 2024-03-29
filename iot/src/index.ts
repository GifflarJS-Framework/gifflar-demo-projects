import IotService from "./services/IotService";
import { IIoTSensorData } from "./types/IIoTSensorData";
import fs from "fs";

const iotService = new IotService();

const sensors: Array<IIoTSensorData> = [
  {
    data: {
      name: "DHT11",
      values: [
        {
          idv: "temperature",
          type: "uint",
          default: "",
          max: "10",
          min: "0",
        },
        {
          idv: "humidity",
          type: "uint",
          default: "",
          max: "10",
          min: "0",
        },
      ],
    },
  },
  {
    data: {
      name: "Rele",
      values: [
        {
          idv: "status",
          type: "bool",
          default: "false",
        },
      ],
    },
  },
];

iotService.createModel(sensors);

// Writing contracts
const codeDHT11 = iotService.writeByName(sensors[0].data.name);
const codeRele = iotService.writeByName(sensors[1].data.name);

// Saving contracts to a file
fs.mkdirSync("./src/contracts", { recursive: true });
fs.writeFile(
  "./src/contracts/DHT11Contract.sol",
  codeDHT11,
  { flag: "w" },
  (err: Error | null) => {
    if (err) throw err;
  }
);
fs.writeFile(
  "./src/contracts/ReleContract.sol",
  codeRele,
  { flag: "w" },
  (err: Error | null) => {
    if (err) throw err;
  }
);
