import AddAcccountButton from "@/components/dashboard/AddAccountButton/AddAccountButton";
import { TradingAccount } from "@/components/dashboard/TradingAccount/TradingAccount";
import { Skeleton } from "@/components/ui/skeleton";
import { useAccounts } from "@/lib/hooks/useAccounts";

const Dashboard = () => {
  const { data, isLoading } = useAccounts();

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-4">
        {Array(6)
          .fill(0)
          .map((_, id) => (
            <Skeleton key={id} className="w-[300px] h-[300px] rounded-md" />
          ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div>No accounts found.</div>;
  }

  return (
    <div className="grid sm:grd-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <AddAcccountButton />

      {data.map((account) => (
        <TradingAccount key={account.id} account={account} />
      ))}
    </div>
  );
};

export default Dashboard;
