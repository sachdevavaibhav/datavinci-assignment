/* 
3 Scorecards
    - Total revenue
    - Total cost
    - Repeat customer percentage
1 Graph
    - Bar graph (sales volume for each category)
1 Table
    - Top 5 products by sales volume/revenue (product name, sales volume, revenue)
*/

import { createContext, useState, useEffect } from "react";
import DATA from "../../data/Sales.json";

const calculateTotalRevenue = (data) => {
    let totalRevenue = 0;
  
    data.forEach((item) => {
      const revenue = parseFloat(item.revenue.replace("$", ""));
      totalRevenue += revenue;
    });
  
    return totalRevenue.toFixed(2);
  }

const calculateTotalCost = (data) => {
    let totalCost = 0;

    data.forEach((item) => {
        const cost = parseFloat(item.cost.replace("$", ""));
        totalCost += cost;
});

return totalCost.toFixed(2);
}

const calculateRepeatCustomerPercentage = (data) => {
    let repeatCustomers = 0;

    data.forEach((item) => {
        const isRepeatCustomer = item["Repeat Customer?"];
        if (isRepeatCustomer) {
        repeatCustomers++;
        }
});

    const repeatCustomerPercentage = ((repeatCustomers / data.length) * 100).toFixed(2);
    return repeatCustomerPercentage;
}

export const DataContext = createContext({
    data: [],
    setData: () => {},
    totalRevenue: 0,
    totalCost: 0,
    repeatCustomerPercentage: 0,
});

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(DATA);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [repeatCustomerPercentage, setRepeatCustomerPercentage] = useState(0);

    useEffect(() => {
        const totalRevenue = calculateTotalRevenue(data);
        setTotalRevenue(totalRevenue);
    }, [data])

    useEffect(() => {
        const totalCost = calculateTotalCost(data);
        setTotalCost(totalCost);
    }, [data])

    useEffect(() => {
        const repeatCustomerPercentage = calculateRepeatCustomerPercentage(data);
        setRepeatCustomerPercentage(repeatCustomerPercentage);
    }, [data])

    const value = {data, setData, totalRevenue, totalCost, repeatCustomerPercentage}

    return <DataContext.Provider value={value}> {children} </DataContext.Provider>


}