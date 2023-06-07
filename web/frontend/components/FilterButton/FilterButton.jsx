import { useState, useContext } from 'react';
import { Button, DatePicker, Popover, VerticalStack } from '@shopify/polaris';
import { DataContext } from '../context/DataContext';

export const FilterButton = () => {
  const {data, setData} = useContext(DataContext)   
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2018, 5, 1).getMonth());
  const [currentYear, setCurrentYear] = useState(new Date(2018, 5, 1).getFullYear());
  const [isError, setIsError] = useState(false);

  const filterDataByDateRange = (data, startDate, endDate) => {
    const filteredData = data.filter((item) => {
      const itemDate = new Date(item.date);
      console.log("item:", itemDate, itemDate >= startDate)
      console.log("start:", startDate)
      
      return itemDate >= startDate && itemDate <= endDate;
    });
  
    return filteredData;
  }
  

  const handleFilterClick = () => {
    if (startDate && endDate && startDate <= endDate) {
      // Perform filtering based on the selected date range
      const filterData = filterDataByDateRange(data, startDate, endDate)
      filterData?setData(filterData):alert("No data found")
      setIsPopoverOpen(false); // Close the popover after filtering
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);

    if (newMonth === 0 && currentMonth === 11) {
      // When navigating from January to December, adjust the year accordingly
      setCurrentYear(currentYear + 1);
    } else if (newMonth === 11 && currentMonth === 0) {
      // When navigating from December to January, adjust the year accordingly
      setCurrentYear(currentYear - 1);
    }
  };

  const handleYearChange = (newYear) => {
    setCurrentYear(newYear);
  };


  return (
    <div style={{marginBottom:"1rem"}}>
        <VerticalStack alignment="center" spacing="tight">
        <Popover
            active={isPopoverOpen}
            activator={<Button onClick={() => setIsPopoverOpen(true)}>Filter</Button>}
            onClose={() => setIsPopoverOpen(false)}
        >
            <VerticalStack alignment="center" spacing="tight">
            <label>Select Date Range:</label>
            <DatePicker
                month={currentMonth}
                year={currentYear}
                allowRange
                selected={startDate}
                onChange={(range) => {
                setStartDate(range.start);
                setEndDate(range.end);
                // console.log("Range:",range)
                }}
                onMonthChange={handleMonthChange}
                onYearChange={handleYearChange}
                disableDatesBefore={new Date(2018, 5, 1)}
                disableDatesAfter={new Date(2023, 3, 30)}
            />
            {isError && <p style={{ color: 'red' }}>Invalid date range.</p>}
            <Button primary onClick={handleFilterClick}>
                Apply
            </Button>
            </VerticalStack>
        </Popover>
        </VerticalStack>
    </div>
  );
};
