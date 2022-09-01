import { networks, defaultNetwork } from "../../gifflarconfig.json";
import { Contract } from "web3-eth-contract";
import { IRequest } from "../types/IRequest";
import { createGifflarManager } from "gifflar-library";
import { IGifflarManager } from "gifflar-library/bin/modules/managing/gifflarManager/types/IGifflarManager";
import { IGifflarContract } from "gifflar-library/bin/modules/managing/gifflarContract/types/IGifflarContract";
import { IContractJson } from "gifflar-library/bin/modules/models/toplevels/contract/types/IContractJson";
import { IContractDeployDTO } from "gifflar-library/bin/modules/managing/gifflarContract/types/IContractDeployDTO";
import { INetworkConfig } from "gifflar-library/bin/modules/deployer/types/INetworkConfig";

class PropertyService {
  // Creating contract manager
  private myGifflarManager: IGifflarManager = createGifflarManager();

  constructor(accountPrivateKey?: string) {
    const network: INetworkConfig = networks.filter((network) => {
      return network.key === defaultNetwork;
    })[0];
    this.myGifflarManager.setDeployConfig(network);
    if (accountPrivateKey) this.myGifflarManager.addSigner(accountPrivateKey);
  }

  createModel(contractName: string, request: IRequest): IContractJson {
    // Creating new contract
    const myContract: IGifflarContract =
      this.myGifflarManager.newContract(contractName);

    const requestData = request.data;
    const keys = Object.keys(requestData);

    keys.map((key) => {
      // Creating a contract variable
      myContract.createVariable(
        requestData[key].type,
        key,
        "public",
        requestData[key].type.regularType === "string"
          ? `"${requestData[key].value}"`
          : `${requestData[key].value}`
      );

      // If is updateable, creates a set function
      if (requestData[key].isUpdateable) {
        // Creating updateable function if needed
        myContract
          .createFunction(`set${key}`, "public", [
            {
              name: `new${key}`,
              type: requestData[key].type.regularType || "",
            },
          ])
          .setAssignment(key, `${`new${key}`}`);
      }
    });

    // If is rentable, create a function to define the renter
    if (request.config && request.config.isRentable) {
      myContract.createVariable({ regularType: `address` }, `renter`, "public");

      // Creating updateable function if needed
      myContract
        .createFunction(`setRenter`, "public", [
          { name: `newRenter`, type: "address" },
        ])
        .setAssignment(`renter`, `newRenter`);

      // Creating function to pay rent
      myContract
        .createFunction(
          "payRent",
          "public",
          [{ type: "address", name: "_renter" }],
          [],
          "payable"
        )
        .setRequire("_renter == renter", "Payer is not renter.")
        .setMethodCall("owner", "transfer", "msg.value");
    }

    return myContract.toJson();
  }

  write(): string {
    return this.myGifflarManager.writeAll();
  }

  compile(contractName: string, callback: (errors: any) => void): any {
    return this.myGifflarManager.compile(contractName, callback);
  }

  deploy(contractName: string, inputs: IContractDeployDTO): Promise<Contract> {
    return this.myGifflarManager.deploy(contractName, inputs);
  }
}

export default PropertyService;
