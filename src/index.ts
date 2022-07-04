import PropertyService from "./gifflar/services/PropertyService";
import { IRequest } from "./types/IRequest";

const propertyService = new PropertyService();

const request1: IRequest = {
  data: {
    owner: {
      value: "0x8BB0516Ed242C2e1EDD507f51497fFF83CbAA5ef",
      type: "address",
      isUpdateable: true,
    },
    propertyAddress: {
      value: "Address property 1",
      type: "string",
      isUpdateable: false,
    },
    number: { value: "12", type: "uint256", isUpdateable: false },
  },
};

const contract1 = propertyService.createModel("Contract1", request1);

const request2: IRequest = {
  data: {
    owner: {
      value: "0x8BB0516Ed242C2e1EDD507f51497fFF83CbAA5ef",
      type: "address",
      isUpdateable: true,
    },
    propertyAddress: {
      value: "Address property 1",
      type: "string",
      isUpdateable: false,
    },
    number: { value: "12", type: "uint256", isUpdateable: false },
    builtDate: { value: "12/02/1996", type: "string", isUpdateable: false },
  },
};

const contract2 = propertyService.createModel("Contract2", request2);

const request3: IRequest = {
  data: {
    owner: {
      value: "0x8BB0516Ed242C2e1EDD507f51497fFF83CbAA5ef",
      type: "address",
      isUpdateable: true,
    },
    propertyAddress: {
      value: "Address property 1",
      type: "string",
      isUpdateable: false,
    },
    number: { value: "12", type: "uint256", isUpdateable: false },
    builtDate: { value: "12/02/1996", type: "string", isUpdateable: false },
  },
  config: {
    isRentable: true,
  },
};

const contract3 = propertyService.createModel("Contract3", request3);

console.log(propertyService.write([contract1, contract2, contract3]));