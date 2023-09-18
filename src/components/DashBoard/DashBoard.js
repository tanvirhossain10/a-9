import React, { useEffect, useState } from 'react';
import { Area, Bar, CartesianGrid, Cell, ComposedChart, Legend, Line, LineChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    console.log(data)
    // "month": "Apr",
    // "investment": 200000,
    // "sell": 423,
    // "revenue": 24500

    return (
        <div>
            <h2 className='text-3xl mb-10'>This is dashboard route</h2>
            <div className='flex k justify-evenly mt-20'>
                <div >
                    <LineChart height={400} width={500} data={data} margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        {/* <CartesianGrid></CartesianGrid> */}
                        <XAxis dataKey={"month"}></XAxis>
                        {/* <Line dataKey={"revenue"}></Line> */}
                        {/* <Line></Line> */}
                        <Line dataKey={'investment'}></Line>
                        <Line dataKey={'revenue'}></Line>

                        {/* <Line dataKey={"sell"}></Line> */}
                        <YAxis dataKey={""}></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>

                    </LineChart>
                </div>
                <div>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="month" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        <Scatter dataKey="cnt" fill="red" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;