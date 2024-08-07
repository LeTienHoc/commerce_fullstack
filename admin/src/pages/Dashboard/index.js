import React from 'react'
import DashboardBox from './components/dashboardBox'
import { FaCircleUser } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";


const Dashboard = () => {
  return (
    <div>
      <div className='right-content w-100'>
        <div className='row dashboardBoxWrapperRow'>
          <div className='col-md-8'>
            <div className='d-flex dashboardBoxWrapper'>
              <DashboardBox color={["#1da256","#48d483"]} icon={<FaCircleUser/>}/>
              <DashboardBox color={["#c012e2","#eb64fe"]} icon={<IoCart/>}/>
              <DashboardBox color={["#2c78e5","#60aff5"]} icon={<MdShoppingBag/>}/>
              <DashboardBox color={["#e1950e","#f3cd29"]} icon={<GiStarsStack/>}/>
            </div>
          </div>
          <div  className='col-md-4 pl-0'>
            <div className='box'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard