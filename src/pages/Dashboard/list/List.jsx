import "./list.scss"
import Sidebar from "@/components/DashboardComponents/sidebar/Sidebar"
import Navbar from "@/components/DashboardComponents/navbar/Navbar"
import Datatable from "@/components/DashboardComponents/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List