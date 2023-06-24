import Link from "next/link"
import { useEffect, useState } from "react"



interface Data{
  list_name:string
display_name:string
list_name_encoded:string
oldest_published_date:string
newest_published_date:string
updated:string

}
export default function Home() {
  const [datas,setDatas]=useState<Data[]>([])
  

  const myfetch=async()=>{
    const res = await (
      await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
    ).json();
    setDatas(res.results)
    console.log(res)

  }
  useEffect(()=>{

    myfetch()

  },[])
  return (
    <div className="container">
      <h1><span className="hilight">T</span>HE <span className="hilight">N</span>EW <span className="hilight">Y</span>ORK <span className="hilight">T</span>IMES <span className="hilight">B</span>EST <span className="hilight">S</span>ELLER <span className="hilight">E</span>XPLORER</h1>
     {datas.map((data,idx)=><Link  key={data.list_name} href={`/list/${data.list_name_encoded}`}><div className="card">{data.display_name} &#10230;</div></Link>)}
     <style jsx>
      {`
      .container{
        width: 50%;
        box-shadow:rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
      }
      .card{
        display: inline-block;
       border: 1px solid black;
       box-shadow:rgba(0, 0, 0, 0.4)0px 4px 16px 0px;
       margin: 1rem;
       color: black;
       transition: transform 1s ease;


      }
      .card:hover{
        transform: translateY(-1rem);
        transition: transform 1s ease;
      }
     span.hilight{
      font-size: 2rem;
     }
     
      `}
     </style>
    </div>
  )
}
