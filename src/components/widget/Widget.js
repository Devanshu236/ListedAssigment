import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Total Revenue",
        isMoney: true,
        //link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "black",
             
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Total Transactions",
        isMoney: false,
        //link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
             
              color: "black",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Total Likes",
        isMoney: false,
        //link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{  color: "black" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Total Users",
        isMoney: false,
        
        
        //link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
             
              color: "black",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
     <>
    
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        
      
        {data.icon}
      </div>
    </div>
    </>
  );
};

export default Widget;