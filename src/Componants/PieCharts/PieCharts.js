import React from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const PieCharts = () => {
  const data = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];
  return (
    <div className="container pl-0 pr-0">
     <div className="pyChartLive">
     <PieChart width={400} height={400}>
        <Pie dataKey="value" startAngle={180} endAngle={0} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
      </PieChart>
     </div>
    </div>
  );
};

export default PieCharts;