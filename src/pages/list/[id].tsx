import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface data{
    rank:number
    rank_last_week:number
    weeks_on_list:number
    asterisk:number
    dagger:number
    primary_isbn10:string
    primary_isbn13:string
    publisher:string
    description:string
    price:string
    title:string
    author:string
    contributor:string
    contributor_note:string
    book_image:string
    book_image_width:number
    book_image_height:number
    amazon_product_url:string
    age_group:string
    book_review_link:string
    first_chapter_link:string
    sunday_review_link:string
    article_chapter_link:string
    isbns:object
    buy_links:buy_links[]
    book_uri:string
}
interface buy_links{
    name:string,
    url:string
}




const Detail = () => {
    const router=useRouter()
    const[datas,setDatas]=useState<data[]>([])

    const detailFectch=async(id:string|string[]|undefined)=>{
        console.log(router.query.id)
if((typeof id)){
    const res = await (
        await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
      ).json();
      setDatas(res.results.books)

}
        


    }
    useEffect(()=>{
            detailFectch(router.query.id)

        
    },[])
  return (
    <div className='container'>
        {datas?.map((data,idx)=>
        <div className='card' key={data.title}>
            <div className='img_wrapper'>
             <img src={data.book_image} alt={`book/${idx}`} width={323} height={500}/>
            </div>
            
            <h2>{data.title}</h2>
            <h3>{data.author}</h3>
            <Link className='link' href={data.buy_links[0].url||"/404"}>Buy now &#10230;</Link>
        </div>)}
        
    <style jsx>
  {`
  
 .container{
    display: flex;
    width: 100%;
    flex-wrap: wrap;

 }
    .card{
        margin: 1rem;
        box-shadow:rgba(0, 0, 0, 0.4)0px 4px 16px 0px;
width: 323px;
        height: 40rem;
    }
    
    h2{
        margin: 1rem;
    }
    h3{
        margin: 1rem;
        color: blue;
    }
    
    .img_wrapper{
        width: 323px;
        overflow: hidden;
    }
  `}
  
      

    </style>  
    <style jsx global>
        {`
        a.link{
            padding: 0rem 1rem;
            margin: 1rem;
            border: 1px solid #666;
             box-shadow:rgba(0, 0, 0, 0.4)0px 4px 16px 0px;
    }
        
        `}
        </style> 
   
    </div>
  )
}

export default Detail
