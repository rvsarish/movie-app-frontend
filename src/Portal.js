import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'
import "../src/Portal.css"
export default function Portal({mode, setMode}) {
  return (
    <div className='portal'>
        <Topbar mode={mode} setMode={setMode}/>
        <Outlet />
    </div>
  )
}
