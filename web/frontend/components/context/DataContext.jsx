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

const calculateRevenueByCategory = (data) => {
    const revenueByCategory = {};
  
    data.forEach((item) => {
      const category = item.category;
      const revenue = parseFloat(item.revenue.replace('$', ''));
  
      if (revenueByCategory[category]) {
        revenueByCategory[category] += revenue;
      } else {
        revenueByCategory[category] = revenue;
      }
    });
  
    const category = Object.keys(revenueByCategory);
    const revenue = Object.values(revenueByCategory);
  
    return { category, revenue };
  }
  

export const DataContext = createContext({
    data: [],
    setData: () => {},
    totalRevenue: 0,
    totalCost: 0,
    repeatCustomerPercentage: 0,
    revenueByCategory: { category: [], revenue: [] },
});

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(DATA);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [repeatCustomerPercentage, setRepeatCustomerPercentage] = useState(0);
    const [revenueByCategory, setRevenueByCategory] = useState({ category: [], revenue: [] });

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

    useEffect(() => {
        const revenueByCategory = calculateRevenueByCategory(data);
        setRevenueByCategory(revenueByCategory);
    }, [data])

    const value = {data, setData, totalRevenue, totalCost, repeatCustomerPercentage, revenueByCategory}

    return <DataContext.Provider value={value}> {children} </DataContext.Provider>


}