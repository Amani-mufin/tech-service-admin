import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import Styled from 'styled-components';

import Card from '../../../commons/card';
import { withRouter } from "react-router-dom";
import KeywordTable from './keyword-table';
import DoughnutChart from './doughnut-chart';
import LineChart from './line-chart';
import { DownloadCSV, FilterCSV } from './csv';
import { WeeklyStats } from '../../../utils/interfaces';
import  AppShell from "../../../components/AppShell"

export default withRouter(function Admin() {
	const [weeklyStats] = useState<WeeklyStats>({
		days: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'sat', 'Sun'],
		data: {
			keywordsAssigned: [50, 100, 45, 60, 100, 45, 12],
			keywordsCategorized: [5, 12, 33, 45, 15, 10, 1],
		},
	});

	const Assigned = 10;
	const Categorized = 5;
	const Unassigned = 55;

	return (
		<AppShell>
			<ProgressMetrics>
				<MenuBurger>
					<Icon path={mdiMenu} size={0.5} color='#8181A5' />
				</MenuBurger>
				<h4>Progress Metrics</h4>
			</ProgressMetrics>
			<ProgressRow>
				<Card cardClass='progress_card general_keywords'>
					<ProgressColumn>
						<span>
							<h2 className='span_blue'> 15</h2>
							<p>Keywords categorized this week</p>
						</span>
						<span>
							<h2 className='span_green'>10</h2>
							<p>Keywords assigned to be approved this week</p>
						</span>
					</ProgressColumn>
					<Canvas>
						<LineChart days={weeklyStats?.days} data={weeklyStats?.data} />
					</Canvas>
				</Card>
				<Card cardClass='progress_card breakdown_card'>
					<h4>Keywords Breakdown</h4>
					<CanvasCover>
						<DoughnutChart
							Assigned={Assigned}
							Categorized={Categorized}
							Unassigned={Unassigned}
						/>
					</CanvasCover>
				</Card>
			</ProgressRow>
			<Card style={{ backgroundColor: '#ffffff', padding: '1rem' }}>
				<KeywordTitle>
					<h4>Keywords</h4>
					<div>
						<FilterCSV buttonClass='filter_button' />
						<DownloadCSV buttonClass='csv_button' />
					</div>
				</KeywordTitle>
				<KeywordTable />
			</Card>
		</AppShell>
	);
}
)
const ProgressMetrics = Styled.div`
  display: flex;
    align-items: center;
    h4 {
      color: #1C1D21;
    }
`;

const MenuBurger = Styled.div`
  width: 1.5rem;
      height: 1.5rem;
      border-radius: 5px;
      background-color: #D5D5E0A5;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
`;

const ProgressRow = Styled.div`
@media (min-width: 1024px){
  display: flex;
        flex-direction: row;
        width: 100%;
        .general_keywords {
    width: 55%;
    margin-right: 1rem;
  }

  .breakdown_card {
    width: 45%
  }
}
.progress_card{
  height: 450px;
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 1rem;
}
.canvas_conatiner{
  height: 400px;
}
`;

const ProgressColumn = Styled.div`
@media (min-width: 1024px){
  display: flex;
span {
 display: flex;
 flex-direction: column;
 align-items: flex-start;

 p {
   margin-right: 1rem;
   margin-top: 0;
 }
}
}
`;

const KeywordTitle = Styled.div`
  display: flex;
      justify-content: space-between;
      padding: 0 1rem 1rem;
      align-items: center;
      flex-wrap: wrap;

      h4 {
        color: #1C1D21;
      }

      .csv_button {
        color: #5E81F4;
        background-color: #ECECF2;
        border: #ECECF2;
        border-radius: 10px;
        padding: 10px 20px;
      }

      .filter_button {
        background-color: #5E81F4;
        color: #ECECF2;
        border: #ECECF2;
        border-radius: 10px;
        padding: 10px 20px;
        margin-right: 1rem;
      }
`;

const Canvas = Styled.div`
      height: 350px;
`;

const CanvasCover = Styled.div`
      height: 400px;
      display: flex;
      justify-content: center;
`;
