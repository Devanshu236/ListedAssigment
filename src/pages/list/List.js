import "./list.scss"
//import Sidebar from "../../components/sidebar/SideBar"
//import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Sidebar from "../../components/sidebar/Siderbar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
  return (
    <div className="list">
      <Sidebar></Sidebar>
      
      <div className="listContainer">
        <Navbar></Navbar>
     
        <Datatable/>
      </div>
    </div>
  )
}

export default List