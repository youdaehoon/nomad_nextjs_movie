import Link from "next/link";
import { useRouter } from "next/router";

const GNB = () => {
  const router=useRouter()
  console.log(router)
  return (
    <>
    <nav>
      <ul>
      <li>
        <Link href={"/"}>Home</Link>
        </li>
       <li>
       <Link href={"/about"}>about</Link>
       </li>
      
      </ul>
     
    </nav>
    <style jsx>
      {`
      nav{
        padding: 1rem;
        border: 1px solid #222;
        font-size: 2rem;
      }
      ul{
        display:flex;
       justify-content: space-between;
      }
      li{
        list-style-type: none;
        border-bottom: 2px solid #222;
      }
      li:hover{
        list-style-type: none;
        border-bottom: 2px solid #999;
      }
     
     
     
      `}
    </style>
    <style jsx global>
      {`
      a:visited{
        color:black
      }
      `}
    </style>
    </>
    
  );
};

export default GNB;
