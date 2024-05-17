import React, { useEffect, useState } from 'react'
import './Index.css'
export default function BackToTop() {
    const [showBtn,setShowBtn]= useState<boolean>(false)

    const handleScroll =()=>{
         if(window.scrollY>500){
                setShowBtn(true);
            }else{
                setShowBtn(false);
            };
    };

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        // trong useEffect, khi đăng ký bất kỳ sự kiện nào từ client, bắt buộc chúng ta phải gỡ nó đi khi component amout

        // Cleanup function
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        } 
    },[]);

    const handleBackTop = ()=>{
        window.scrollTo({
             top:0,
             behavior:'smooth',
        })
    }

  return (
    <div>BackToTop
        {showBtn && <button onClick={handleBackTop} className='btn-back-top'>back</button>}
    </div>
  )
}
