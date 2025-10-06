import { useState, useEffect } from "react";
import { TradingAccountType, type GetAccountResponse } from "../types/Account";

// Хук аля Tanstack Query с мок данными

export const useAccounts = () => {
  const [data, setData] = useState<GetAccountResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      new Promise<GetAccountResponse[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              type: TradingAccountType.StandardTradingAccount,
              id: "189024523890",
              active: true,
              demo: false,
              equity: 12500,
              leverage: 500,
              data: [
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 7,
                  value: 10000,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 6,
                  value: 11200,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5,
                  value: 10800,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 4,
                  value: 12300,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3,
                  value: 11800,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2,
                  value: 12000,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 1,
                  value: 12200,
                },
                { timestamp: Date.now(), value: 12500 },
              ],
            },

            {
              type: TradingAccountType.StandardTradingAccount,
              id: "24582349085",
              active: true,
              demo: true,
              equity: 50000,
              leverage: 100,
              data: [
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 7,
                  value: 45000,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 6,
                  value: 46000,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5,
                  value: 47500,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 4,
                  value: 48000,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3,
                  value: 49500,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2,
                  value: 49000,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 1,
                  value: 51000,
                },
                { timestamp: Date.now(), value: 50000 },
              ],
            },

            {
              type: TradingAccountType.StandardTradingAccount,
              id: "234345221",
              active: true,
              demo: false,
              equity: 25000,
              leverage: 20,
              data: [
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 7,
                  value: 24000,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 6,
                  value: 24200,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5,
                  value: 24500,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 4,
                  value: 24300,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3,
                  value: 24800,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2,
                  value: 25100,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 1,
                  value: 25000,
                },
                { timestamp: Date.now(), value: 25000 },
              ],
            },

            {
              type: TradingAccountType.AppTradingAccount,
              id: "1825322345212",
              balance: 7500,
            },
            {
              type: TradingAccountType.StandardTradingAccount,
              id: "234345221",
              active: false,
              demo: false,
              equity: 5000,
              leverage: 50,
              data: [
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 7,
                  value: 4800,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 6,
                  value: 4900,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5,
                  value: 4850,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 4,
                  value: 5100,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3,
                  value: 5050,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2,
                  value: 5200,
                },
                {
                  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 1,
                  value: 5150,
                },
                { timestamp: Date.now(), value: 5000 },
              ],
            },
          ]);
        }, 1000);
      }).then((result) => {
        setData(result);
        setIsLoading(false);
      });
    };

    fetchData();
  }, []);

  return { data, isLoading };
};
