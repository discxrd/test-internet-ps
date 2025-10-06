import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import type { IAppTradingAccount } from "@/lib/types/Account";
import { memo } from "react";

export const AppTradingAccount = memo(
  ({ account }: { account: IAppTradingAccount }) => {
    return (
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>App Trading Account</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="font-bold">Balance - $ {account.balance}</span>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button variant="outline" className="w-full">
            Открыть приложение
          </Button>
        </CardFooter>
      </Card>
    );
  }
);
