import Sidebar from "@/components/DashboardComponents/sidebar/Sidebar";
import Navbar from "@/components/DashboardComponents/navbar/Navbar";
import "./home.scss";
import Widget from "@/components/DashboardComponents/widget/Widget";
import Featured from "@/components/DashboardComponents/featured/Featured";
import Chart from "@/components/DashboardComponents/chart/Chart";
import Table from "@/components/DashboardComponents/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
