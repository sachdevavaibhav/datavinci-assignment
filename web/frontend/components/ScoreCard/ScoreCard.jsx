import { Card, Text, Box, Subheading, Icon, HorizontalStack, VerticalStack } from '@shopify/polaris';
import {FinancesMajor} from '@shopify/polaris-icons';


export const ScoreCard = ({ heading, label }) => {

  return (
    <Card sectioned>
        <VerticalStack align='center'>
            <Box>
                <HorizontalStack align='start'>
                    <Text variant="headingXl" as="p">{heading}</Text>
                    <Icon source={FinancesMajor} color="base"/>
                </HorizontalStack>
                <Text >{label}</Text>
            </Box>            
        </VerticalStack>  
    </Card>
  );
};
