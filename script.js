let option,result;
let d='';
let path='snacks';
let des=["Samosa","Pani Puri","Khaman Dhokla","Kachori"];
window.onload=function(){
    option=document.getElementById("option1");
    result=document.getElementById("result1");
    option.onchange=function(){
        if(option.value=="Snakes"){
            path="snakes";
            des=["Samosa","Pani Puri","Khaman Dhokla","Kachori"];
        }
        else if(option.value=="South-in"){
            path="south-in";
            des=["Masala Dosa","Idli","Sambar Wada","Uttapam"];
        }
        else if(option.value=="Chiense"){
            path="chiense";
            des=["Noodles","Manchurian","Fried Rice","Chilly Panner"];
        }
        else if(option.value=="Pizza"){
            path="pizza";
            des=["Veg Cheese Pizza","Maxican Pizza","Corn Pizza","Paneer Tikka Pizza"];
        }
        d=`<table>
        <tr>
            <td><div class="img1"><img src="img/wishlist/`+path+`/1.jpg" alt="Food1"></div>
          <p class="description">
            `+des[0]+`
          </p>
          <div class="descri">
              
        </div>
        </td>
            <td><div class="img1"><img src="img/wishlist/`+path+`/2.jpg" alt="Food2"></div>
          <p class="description">
            `+des[1]+`
          </p>
          <div class="descri">
              
        </div>
        </td>
        </tr>
        <tr>
            <td><div class="img1"><img src="img/wishlist/`+path+`/3.jpg" alt="Food3"></div>
          <p class="description">
          `+des[2]+`
              
          </p>
          <div class="descri">
              
        </div>
        </td>
            <td><div class="img1"><img src="img/wishlist/`+path+`/4.jpg" alt="Food4"></div>
          <p class="description">
          `+des[3]+`
          </p>
          <div class="descri">

          </div>
        </td>
        </tr>
    </table>`;
     
        result.innerHTML=d;
    }
}
