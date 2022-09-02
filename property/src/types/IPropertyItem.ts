import { ITypeName } from "gifflar-library/bin/modules/types/ITypeName";

export interface IPropertyItem {
  value: string;
  type: ITypeName;
  isUpdateable: boolean;
}
