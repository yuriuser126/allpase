import { Card, CardContent, Typography } from "@mui/material";

interface CardSummaryProps {
  title: string;
  value: number;
}

const CardSummary = ({ title, value }: CardSummaryProps) => (
  <Card style={{ minWidth: 150 }}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5">{value}</Typography>
    </CardContent>
  </Card>
);

export default CardSummary;
