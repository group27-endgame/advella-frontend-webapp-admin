import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';

export default {
  title: 'MUI/Card',
  component: Card,
  args: {
    size: 'medium',
    variant: 'outlined',
    elevation: 12,
    children: "Card"
  },
} as ComponentMeta<typeof Card>;

export const Template: ComponentStory<typeof Card> = (props) => <Card {...props} />;

export const Basic = () => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        benevolent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
)