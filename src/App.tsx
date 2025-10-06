import { Toaster } from "sonner";
import { PageLayout } from "./components/PageLayout";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <PageLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
      <Toaster />
    </PageLayout>
  );
}

export default App;
