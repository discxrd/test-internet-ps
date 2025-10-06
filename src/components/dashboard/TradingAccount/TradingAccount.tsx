import {
  TradingAccountType,
  type IAppTradingAccount,
  type IStandardTradingAccount,
} from "@/lib/types/Account";
import { StandardTradingAccount } from "./StandardTradingAccount";
import { AppTradingAccount } from "./AppTradingAccount";

interface TradingAccountProps {
  account: IStandardTradingAccount | IAppTradingAccount;
}

// Factory component для трейдинг аккаунта

import { memo } from "react";

export const TradingAccount = memo(({ account }: TradingAccountProps) => {
  switch (account.type) {
    case TradingAccountType.StandardTradingAccount:
      return <StandardTradingAccount account={account} />;
    case TradingAccountType.AppTradingAccount:
      return <AppTradingAccount account={account} />;
    default:
      return null;
  }
});
