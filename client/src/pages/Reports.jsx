import React, { useContext } from 'react';
import { ReportsContext } from '../reportsContext';
import { UserContext } from '../userContext';
import ThisWeek from '../components/charts/week/ThisWeek';
import LastSevenDays from '../components/charts/week/LastSevenDays';
import ThisMonth from '../components/charts/month/ThisMonth';
import Last30Days from '../components/charts/month/Last30Days';
import ThisYear from '../components/charts/year/ThisYear';
import LastYear from '../components/charts/year/LastYear';

const Reports = () => {
  const {
    allTransactions,
    setAllTransactions,
    chartView,
    setChartView,
    drink,
    setDrink,
    thisYear,
    lastYear,
    thisMonth,
    lastMonth,
  } = useContext(ReportsContext);
  const { userInfo } = useContext(UserContext);

  const handleViewChange = (e) => {
    const clickedView = e.split(' ')[0];
    if (clickedView !== chartView) {
      setChartView(clickedView);
    }
  }

  return (
    userInfo.businessId ?
      (
        <div className='container' style={{ maxWidth: '80vw' }}>
          <h1 className='page-heading' style={{ paddingBottom: '30px' }}>
            {chartView} View
          </h1>
          <div className="dropdown text-center" style={{ paddingBottom: '30px' }}>
            <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {chartView} View
            </button>
            <ul className="dropdown-menu" onClick={(e) => handleViewChange(e.target.innerText)} >
              <li><a className="dropdown-item" href="#">Year View</a></li>
              <li><a className="dropdown-item" href="#">Month View</a></li>
              {/* <li><a className="dropdown-item" href="#">Week View</a></li> */}
            </ul>
          </div>
          <div className='row'>
          {/* {chartView === 'Week' &&
              (
                <>
                  <LastSevenDays />
                  <ThisWeek />
                </>
              )
            } */}
            {chartView === 'Month' &&
              (
                <>
                  <Last30Days data={lastMonth}/>
                  <ThisMonth data={thisMonth}/>
                </>
              )
            }
            {chartView === 'Year' &&
              (
                <>
                  <LastYear data={lastYear}/>
                  <ThisYear data={thisYear} />
                </>
              )
            }
          </div>
        </div>
      ) : (
        <div className='container'>
          <h1 className='page-heading'>
            Please login or register your bar in your profile first to view the reports page.
          </h1>
        </div>
      )
  )
};

export default Reports;
