import PropertyService from "./services/PropertyService";
import { IRequest } from "./types/IRequest";
import fs from "fs";

const propertyService = new PropertyService();

const request1: IRequest = {
  data: {
    owner: {
      value: "0x8BB0516Ed242C2e1EDD507f51497fFF83CbAA5ef",
      type: { regularType: "address payable" },
      isUpdateable: true,
    },
    propertyAddress: {
      value: "Address property 1",
      type: { regularType: "string" },
      isUpdateable: false,
    },
    number: {
      value: "12",
      type: { regularType: "uint256" },
      isUpdateable: false,
    },
    forSale: {
      value: "false",
      type: { regularType: "bool" },
      isUpdateable: false,
    },
    priceInCrypto: {
      value: "2000000000000000000000",
      type: { regularType: "uint256" },
      isUpdateable: true,
    },
  },
};

propertyService.createModel("Contract1", request1);

const request2: IRequest = {
  data: {
    owner: {
      value: "0x8BB0516Ed242C2e1EDD507f51497fFF83CbAA5ef",
      type: { regularType: "address payable" },
      isUpdateable: true,
    },
    propertyAddress: {
      value: "Address property 1",
      type: { regularType: "string" },
      isUpdateable: false,
    },
    number: {
      value: "12",
      type: { regularType: "uint256" },
      isUpdateable: false,
    },
    builtDate: {
      value: "12/02/1996",
      type: { regularType: "string" },
      isUpdateable: false,
    },
    forSale: {
      value: "false",
      type: { regularType: "bool" },
      isUpdateable: false,
    },
    priceInCrypto: {
      value: "2000000000000000000000",
      type: { regularType: "uint256" },
      isUpdateable: true,
    },
  },
};

propertyService.createModel("Contract2", request2);

const request3: IRequest = {
  data: {
    owner: {
      value: "0x8BB0516Ed242C2e1EDD507f51497fFF83CbAA5ef",
      type: { regularType: "address payable" },
      isUpdateable: true,
    },
    propertyAddress: {
      value: "Address property 1",
      type: { regularType: "string" },
      isUpdateable: false,
    },
    number: {
      value: "12",
      type: { regularType: "uint256" },
      isUpdateable: false,
    },
    builtDate: {
      value: "12/02/1996",
      type: { regularType: "string" },
      isUpdateable: false,
    },
    forSale: {
      value: "false",
      type: { regularType: "bool" },
      isUpdateable: false,
    },
    priceInCrypto: {
      value: "2000000000000000000000",
      type: { regularType: "uint256" },
      isUpdateable: true,
    },
  },
  config: {
    isRentable: true,
  },
};

propertyService.createModel("Contract3", request3);

// Writing contracts
const code = propertyService.write();

// Saving contracts to a file
fs.mkdirSync("./src/contracts", { recursive: true });
fs.writeFile(
  "./src/contracts/MyContracts.sol",
  code,
  { flag: "w" },
  (err: Error | null) => {
    if (err) throw err;
  }
);
