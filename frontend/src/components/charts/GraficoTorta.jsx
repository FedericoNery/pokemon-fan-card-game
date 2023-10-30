import * as React from 'react';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const GraficoTorta = ({data}) => {
    return (
      <Paper>
        <Chart
          data={data}>
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title
            text="Area of Countries"
          />
          <Animation />
        </Chart>
        <Chart.Label>
          El label
        </Chart.Label>
      </Paper>
    );
}
 
export default GraficoTorta;