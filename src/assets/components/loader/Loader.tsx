import ClientApi from "../clientApi/ClientApi";
import Sidebar from "../sidebar/Sidebar";

function Loader() {
  return (
    <ClientApi>
      <Sidebar />
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
        role="status"
      ></div>
    </ClientApi>
  );
}

export default Loader;
