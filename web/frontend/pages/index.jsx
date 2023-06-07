import {Page, VerticalStack, HorizontalStack} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {ScoreCardLayout, BarChart, TopProductsTable, FilterButton} from "../components/index";


export default function HomePage() {
  return (
    <Page fullWidth>
      <TitleBar title={"Dashboard"} primaryAction={null} />
      <HorizontalStack align="end">
        <FilterButton />
      </HorizontalStack>
      <VerticalStack>
        <ScoreCardLayout />
        <BarChart />
        <TopProductsTable />
      </VerticalStack>
    </Page>
  );
}
