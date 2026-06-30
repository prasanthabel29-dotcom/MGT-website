import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function DashboardHome() {
  const data = [
    { day: "05 May", value: 0 },
    { day: "06 May", value: 0 },
    { day: "07 May", value: 0 },
    { day: "08 May", value: 0 },
    { day: "09 May", value: 0 },
    { day: "10 May", value: 0 },
    { day: "11 May", value: 1 },
  ];

  const pieData = [
    { name: "Today", value: 1 },
    { name: "Old", value: 0 },
  ];

  const COLORS = ["#22c55e", "#f97316"];

  return (
    <>
      {/* CARDS */}
      <div className="cards">
        <div className="card">
          <h4>Total Contacts</h4>
          <h1>1</h1>
        </div>

        <div className="card">
          <h4>Today</h4>
          <h1>1</h1>
        </div>
      </div>

      {/* CHARTS */}
      <div className="charts">

        <div className="chart-box">
          <h3>Last 7 Days</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2563eb" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Today vs Old</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={90}>
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </>
  );
}