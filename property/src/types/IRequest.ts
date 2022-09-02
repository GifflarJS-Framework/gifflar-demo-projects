import { IPropertyConfig } from "./IPropertyConfig";
import { IPropertyData } from "./IPropertyData";

export interface IRequest {
  data: IPropertyData;
  config?: IPropertyConfig;
}
