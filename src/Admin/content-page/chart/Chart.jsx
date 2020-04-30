import React, { useMemo, Fragment } from 'react';
import { Chart } from 'react-charts'

const ChartDatas = () => {
    const data = useMemo(
        () => [
          {
            label: 'Series 1',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          },
          {
            label: 'Series 2',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
          }
        ],
        []
      )
     
      const axes = useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )

    return (
        <Fragment>
            <h4 className="text-center mb-4">A Simple Chart</h4>
            <Chart data={data} axes={axes}  style={{width: '100%', height: '50vh'}}/>
        </Fragment>
    );
};

export default ChartDatas; 
