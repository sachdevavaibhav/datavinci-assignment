import { Layout } from "@shopify/polaris"
import { ScoreCard } from "./ScoreCard"

import { useContext } from "react";
import { DataContext } from "../context/DataContext"

export const ScoreCardLayout = () => {
    const {totalRevenue, totalCost, repeatCustomerPercentage} = useContext(DataContext);
    const targetRevenue = 200000
    const targetCost = 6000
  return (
    <Layout>
        <Layout.Section oneThird>
            <ScoreCard label="Total Revenue" value={(totalRevenue/targetRevenue)*100} heading={`$${totalRevenue}`} target={targetRevenue} />
        </Layout.Section>
        <Layout.Section oneThird>
            <ScoreCard label="Total Cost" value={(totalCost/targetCost)*100} heading={`$${totalCost}`} target={targetCost}/>
        </Layout.Section>
        <Layout.Section oneThird>
            <ScoreCard label="Repeat Customer Percentage" value={repeatCustomerPercentage} heading={`${repeatCustomerPercentage}%`} />
        </Layout.Section>
  </Layout>
  )
}