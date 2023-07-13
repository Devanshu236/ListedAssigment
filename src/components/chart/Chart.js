import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const data = [
  { name: "Week 1", Total: 1200 },
  { name: "Week 2", Total: 2100 },
  { name: "Week 3", Total: 800 },
  { name: "Week 4", Total: 1600 },
  { name: "Week 5", Total: 900 },
  { name: "Week 6", Total: 1700 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">Activities<br></br>May-June 2021</div>
      <ResponsiveContainer width="100%" height="40px" aspect={aspect}>
        <AreaChart
          width={750}
          height={100}
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 150 }}
        >
          {/* <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs> */}
          <XAxis dataKey="name" stroke="gray" />
          <YAxis dataKey="Total" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="green"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
        
      </ResponsiveContainer>
      
    </div>
  );
};

export default Chart;