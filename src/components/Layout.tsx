import React, { ReactNode, useState } from "react"
import GNB from "./GNB"
import { Inter,Caveat } from 'next/font/google'

const cabeat=Caveat(
  {
    subsets:["latin"],
    display:"swap"
  }
)

interface IProps{
    children:ReactNode
}
const Layout = ({children}:IProps) => {


  return (
    <div className={cabeat.className}>
    <GNB/>
    <div className="content">{children}</div>
    <style jsx>{`
      .content{
        padding: 1rem;
        display: flex;
        justify-content: center;
      }
      `}</style>
    </div>
  )
}

export default Layout