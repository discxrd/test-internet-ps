export enum TradingAccountType {
  StandardTradingAccount = "StandardTradingAccount",
  AppTradingAccount = "AppTradingAccount",
}

export interface IAppTradingAccount {
  type: TradingAccountType.AppTradingAccount;
  id: string;
  balance: number;
}

export interface IStandardTradingAccount {
  type: TradingAccountType.StandardTradingAccount;
  id: string;
  active: boolean;
  demo: boolean;
  equity: number;
  leverage: number;

  data: Array<{
    timestamp: number;
    value: number;
  }>;
}

export type GetAccountResponse = IStandardTradingAccount | IAppTradingAccount;
