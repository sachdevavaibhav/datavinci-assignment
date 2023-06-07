import {LegacyCard, DataTable} from '@shopify/polaris';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const TopProductsTable = () => {
    const { topProducts } = useContext(DataContext);
  return (
    <div style={{marginBottom:"1rem"}}>
        <LegacyCard>
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
        </LegacyCard>
    </div>
  )
}

