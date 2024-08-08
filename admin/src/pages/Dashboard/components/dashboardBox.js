import { Button } from '@mui/material';
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";


const DashboardBox = (props) => {
    return (
        <>
            <Button className='dashboardBox' style={{backgroundImage:`linear-gradient(to right,${props.color?.[0]},${props.color?.[1]})`}}>
                <div className='d-flex w-100'>
                    <div className='col1'>
                        <h4 className='text-white mb-0'>Total Users</h4>
                        <span className='text-white'>277</span>
                    </div>

                    <div className='ml-auto'>
                    {
                        props.icon?
                        <span className='icon'>
                            {props.icon}
                        </span>:''
                    }

                        
                    </div>
                </div>
                <div className='d-flex align-items-center w-100'>
                    <h5 className='text-white mb-0 mt-0'>Tháng trước</h5>
                    <Button className='ml-auto toggleIcon'><BsThreeDotsVertical/></Button>
                </div>
            </Button>
        </>
    )
}

export default DashboardBox