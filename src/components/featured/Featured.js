import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { PieChart } from 'react-minimal-pie-chart';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Top Products</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <PieChart
  data={[
    { title: 'One', value: 10, color: 'green' },
    { title: 'Two', value: 15, color: 'red' },
    { title: 'Three', value: 20, color: 'yellow' },
  ]}
/>
        </div>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Basic</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">55%</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Custom</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">31%</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Super</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">14%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;