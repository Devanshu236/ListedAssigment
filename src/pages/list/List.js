import "./list.scss"
//import Sidebar from "../../components/sidebar/SideBar"
//import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Sidebar from "../../components/sidebar/Siderbar"

const List = () => {
  return (
    <div className="list">
      <Sidebar></Sidebar>
      
      <div className="listContainer">
     
        <Datatable/>
      </div>
    </div>
  )
}

export default List