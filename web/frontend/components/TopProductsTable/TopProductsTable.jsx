import {Card, DataTable} from '@shopify/polaris';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const TopProductsTable = () => {
    const { topProducts } = useContext(DataContext);
  return (
    <Card>
        <DataTable
            columnContentTypes={[
                'text',
                'text',
            ]}
            headings={['Product', 'Revenue']}
            rows={topProducts.map((product) => {
                return [
                    product.category,
                    `$${product.revenue}`,
                ]
            })}
        />
    </Card>
  )
}

