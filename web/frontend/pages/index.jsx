import {Page} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {ScoreCardLayout, BarChart, TopProductsTable} from "../components/index";


export default function HomePage() {
  return (
    <Page fullWidth>
      <TitleBar title={"Dashboard"} primaryAction={null} />
      <ScoreCardLayout />
      <BarChart />
      <TopProductsTable />
    </Page>
  );
}
