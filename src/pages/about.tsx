import React from 'react'

const about = () => {
  return (
    <div className='container'>
      <h1>ABOUT US</h1>
<p>Welecome to the official explorer for the NewTork Times Best Seller list explorer.</p>
<p>We hope you enjoy your stay!</p>

      <style jsx>{``}</style>
      <style jsx>
        {`
        .container{
          padding: 2rem;
          border: 1px solid #666;
          box-shadow:rgba(0, 0, 0, 0.4)0px 4px 16px 0px;
        }
        h1::first-letter{
          font-size: 2rem;
        }
        h1{margin-bottom: 1rem;}
        `}
      </style>
    </div>
  )
}

export default about