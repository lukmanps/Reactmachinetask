import { useState } from 'react'
import SideBar from './components/SideBar';
import {
  GanttChartSquare,
  PieChart,
  BarChartBig,
  Wrench,
  Blocks,
  BadgeHelp,
} from 'lucide-react';
import { SideBarItems } from './components/SideBar';
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        {/* <div>
          <SideBar>
            <SideBarItems icon={<GanttChartSquare />} text={'DashBoard'} active />
            <SideBarItems icon={<PieChart />} text={'PieChart'} />
            <SideBarItems icon={<BarChartBig />} text={'BarChartBig'} />

            <hr className='m-auto' />
            <SideBarItems icon={<Wrench />} text={'Support'} />
            <SideBarItems icon={<Blocks />} text={'Plugins'} />
            <SideBarItems icon={<BadgeHelp />} text={'Help'} />
          </SideBar>
        </div> */}
        <div className='flex-1 '>
          {/* <NavBar /> */}
          <DashBoard />
        </div>
      </div>
      {/* SideBar */}
      {/* Pages */}
    </>
  )
}

export default App
