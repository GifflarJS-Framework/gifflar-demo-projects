import { createContractManager } from "gifflar-library";
import { IWeb3 } from "gifflar-library/bin/modules/deployer/types/IWeb3";
import { IContractDeployDTO } from "gifflar-library/bin/modules/managing/contract/types/IContractDeployDTO";
import { IGifflarContractManager } from "gifflar-library/bin/modules/managing/contractManager/types/IGifflarContractManager";
import { IGifflarContract } from "gifflar-library/bin/modules/managing/contract/types/IGifflarContract";
import { IContractJson } from "gifflar-library/bin/modules/models/contract/types/IContractJson";
import { Contract } from "web3-eth-contract";
import { IRequest } from "../../types/IRequest";

class PropertyService {
  // Creating contract model
  private myContractManager: IGifflarContractManager = createContractManager();

  constructor(web3?: IWeb3, accountPrivateKey?: string) {
    // Setting web3
    if (web3) {
      this.myContractManager.setWeb3(web3);
    }

    // Saving account to memory
    if (accountPrivateKey && web3) {
      const account = web3.eth.accounts.privateKeyToAccount(accountPrivateKey);
      web3.eth.accounts.wallet.add(account);
    }
  }

  createModel(contractName: string, request: IRequest): IContractJson {
    // Creating new contract
    const myContract: IGifflarContract =
      this.myContractManager.newContract(contractName);

    const requestData = request.data;
    const keys = Object.keys(requestData);

    keys.map((key) => {
      // Creating a contract variable
      myContract.createVariable(
        requestData[key].type,
        key,
        "public",
        requestData[key].type === "string"
          ? `"${requestData[key].value}"`
          : `${requestData[key].value}`
      );

      // If is updateable, creates a set function
      if (requestData[key].isUpdateable) {
        // Creating updateable function if needed
        myContract
          .createFunction(`set${key}`, "public", [
            { name: `new${key}`, type: requestData[key].type },
          ])
          .setAssignment(key, `${`new${key}`}`);
      }
    });

    // If is rentable, create a function to define the renter
    if (request.config && request.config.isRentable) {
      myContract.createVariable(`address`, `renter`, "public");

      // Creating updateable function if needed
      myContract
        .createFunction(`setRenter`, "public", [
          { name: `newRenter`, type: "address" },
        ])
        .setAssignment(`renter`, `newRenter`);
    }

    return myContract.toJson();
  }

  write(json: Array<IContractJson>): string {
    return this.myContractManager.write(json);
  }

  compile(contractName: string, callback: (errors: any) => void): any {
    return this.myContractManager.compile(contractName, callback);
  }

  deploy(contractName: string, inputs: IContractDeployDTO): Promise<Contract> {
    return this.myContractManager.deploy(contractName, inputs);
  }
}

export default PropertyService;
