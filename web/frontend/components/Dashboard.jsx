import ScoreCard from './ScoreCard/ScoreCard';

const Dashboard = () => {
  return (
    <div>
      <ScoreCard title="Total Revenue" value="$10,000" />
      <ScoreCard title="Total Cost" value="$8,000" />
      <ScoreCard title="Repeat Customer Percentage" value="75%" />
    </div>
  );
};

export default Dashboard;
