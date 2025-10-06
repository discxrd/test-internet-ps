import { Line, LineChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { IStandardTradingAccount } from "@/lib/types/Account";
import { cn, timestampToDate } from "@/lib/utils";
import { memo, useCallback, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const chartConfig = {
  value: {
    label: "Balance",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface StandardTradingAccountProps {
  account: IStandardTradingAccount;
}

export const StandardTradingAccount = memo(
  ({ account }: StandardTradingAccountProps) => {
    const [isActivated, setIsActivated] = useState(!account.demo);

    const getHeaderStyle = useCallback(() => {
      if (!isActivated)
        return "bg-deactivated-trading-account-header shadow-deactivated-trading-account-header";
      if (account.demo) return "bg-demo-trading-account-header";
      return "bg-standard-trading-account-header";
    }, [isActivated, account.demo]);

    return (
      <Card className="flex-1">
        <CardHeader className={cn(getHeaderStyle(), "shadow-sm transition")}>
          <CardTitle className="text-white text-lg">{account.id}</CardTitle>
          <CardDescription className="text-white/70">
            {account.demo ? "Demo Account" : "Real Account"}
          </CardDescription>
          <CardAction>
            {!account.demo && <Button variant="secondary">Депозит</Button>}
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-2 relative">
          {!isActivated && account.demo && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/50">
              <p className="text-lg font-semibold">Account deactivated</p>
              <div className="flex items-center space-x-2 mt-2">
                <Switch
                  id="deactivated-account"
                  checked={isActivated}
                  onCheckedChange={setIsActivated}
                />
                <Label htmlFor="deactivated-account">Activate</Label>
              </div>
            </div>
          )}

          <div className={cn({ "blur-sm": !isActivated })}>
            <div>
              <p className="font-medium">Equity - $ {account.equity}</p>
              <p className="font-medium">Leverage - 1:{account.leverage}</p>
            </div>

            <ChartContainer config={chartConfig} className="h-[150px] w-full">
              <LineChart
                accessibilityLayer
                data={account.data}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="timestamp"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(timestamp) => timestampToDate(timestamp)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />

                <Line dataKey="value" type="linear" stroke="#00f" dot={false} />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    );
  }
);
