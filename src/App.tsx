import PieChart from "./components/PieChart";
import Table from "./components/Table";

function App() {
  return (
    <div className="flex h-screen w-full justify-center bg-[#F7FAFC]">
      <div className="px-5 py-26">
        <PieChart />
      </div>
      <div className="px-5 py-26">
        <Table />
      </div>
    </div>
  );
}

export default App;
