import React from 'react'
import pic1 from '.././img/s1.jpg'
import pic2 from '.././img/s2.jpg'
import pic3 from '.././img/s3.jpg'
import pic4 from '.././img/t.jpg'
import './slide.css'

function SlideShow() {
  var counter = 1;


setInterval(()=>{
  document.getElementById('radio' + counter).checked = true;
  counter++
  if(counter >4){
  counter = 1
  }
}, 5000)









  return (
   <div>
     <div className = 'slider'>
       <div className = 'slides'>
           <input type = 'radio' className = 'radio-btn' id = 'radio1'/>
           <input type = 'radio' className = 'radio-btn' id = 'radio2'/>
           <input type = 'radio' className = 'radio-btn' id = 'radio3'/>
           <input type = 'radio' className = 'radio-btn' id = 'radio4'/>
          
            <div className = 'slide first'>
               <img src ={pic1} alt = '' />
            </div>
            <div className = 'slide'>
               <img src ={pic2} alt = ''/>
            </div>
            <div className = 'slide'>
               <img src ={pic3} alt = '' />
            </div>
            <div className = 'slide'>
               <img src ={pic4} alt = '' />
            </div>


            <div className = 'automatic-auto'>
              <div className = 'auto1'></div>
              <div className = 'auto2'></div>
              <div className = 'auto3'></div>
              <div className = 'auto4'></div>

            </div>   
         

       </div>
       <div className = 'navigation-manual'>
          <label htmlFor = 'radio1' className = 'manual-btn'></label>
          <label htmlFor = 'radio2' className = 'manual-btn'></label>
          <label htmlFor = 'radio3' className = 'manual-btn'></label>
          <label htmlFor = 'radio4' className = 'manual-btn'></label>

        </div>


   
     </div>

     </div>

  

  )
}

export default SlideShow
