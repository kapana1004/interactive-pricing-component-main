

const priceSlider = document.querySelector(".slider");
let pageViewInput = document.querySelector(".pageviewers");
let slideDesktop = document.getElementById("slidedesk");
let pagviewDEsktop = document.getElementById("pageviewDesk");
let monthPrice = document.querySelector(".dollarspan");
let monthPriceMob = document.querySelector(".dollarspanmob");
let discount = document.querySelector(".check");
let greenLsideMob = document.querySelector(".greenslider");
let greenSlideDesk = document.querySelector(".greensliderdesk");


discount.addEventListener("input", function(){

  if(discount.checked){
    pageViewInput.innerHTML="10K " + "pageviews".toUpperCase();
    monthPriceMob.innerHTML="$ " + 8*12*0.75+".00";
    pagviewDEsktop.innerHTML="10K " + "pageviews".toUpperCase();
    monthPrice.innerHTML="$ " + 8*12*0.75+".00";
    slideDesktop.value =1;
    priceSlider.value = 1;
    greenLsideMob.style.width= "54px";
    greenSlideDesk.style.width= "86px";


  }else if(!discount.checked){

    pageViewInput.innerHTML="10K " + "pageviews".toUpperCase();
    monthPriceMob.innerHTML="$8"
    pagviewDEsktop.innerHTML="10K " + "pageviews".toUpperCase();
    monthPrice.innerHTML="$8"
    slideDesktop.value =1;
    priceSlider.value=1;
    greenLsideMob.style.width= "54px";
    greenSlideDesk.style.width= "86px";

  }


})

//FOR MOBILE:

priceSlider.addEventListener("input", function(){



if(priceSlider.value==0 &&!discount.checked){

        pageViewInput.innerHTML="0 " + "pageviews".toUpperCase();
        monthPriceMob.innerHTML="$0.00"
        greenLsideMob.style.width= "1px";
    
    }
   else if(priceSlider.value==1 &&!discount.checked){

    pageViewInput.innerHTML="10K " + "pageviews".toUpperCase();
    monthPriceMob.innerHTML="$8.00"
    greenLsideMob.style.width= "54px";

} else if (priceSlider.value==2 &&!discount.checked){

    pageViewInput.innerHTML="50K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$12.00 "
    greenLsideMob.style.width= "106px";
    
} else if (priceSlider.value==3 &&!discount.checked){

    pageViewInput.innerHTML="100K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$16.00 " 
    greenLsideMob.style.width= "159px";
} else if (priceSlider.value==4 &&!discount.checked){

    pageViewInput.innerHTML="500K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$24.00 " 
    greenLsideMob.style.width= "212px";

} else if (priceSlider.value==5 &&!discount.checked){

    pageViewInput.innerHTML="1M " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$36.00 "
    greenLsideMob.style.width= "264px";

}

 if(priceSlider.value==0 && discount.checked){

    pageViewInput.innerHTML="0 " + "pageviews".toUpperCase();
    monthPriceMob.innerHTML="0.00"
    greenLsideMob.style.width= "1px";
}
   else if (priceSlider.value==1 && discount.checked){

    pageViewInput.innerHTML="10K " + "pageviews".toUpperCase();
    monthPriceMob.innerHTML="$ " + 8*12*0.75+".00"
    greenLsideMob.style.width= "54px";

} else if (priceSlider.value==2 && discount.checked){

    pageViewInput.innerHTML="50K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$ " + 12*12*0.75+".00"
    greenLsideMob.style.width= "106px";
    
} else if (priceSlider.value==3 && discount.checked){

    pageViewInput.innerHTML="100K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$ " + 16*12*0.75+".00"
    greenLsideMob.style.width= "159px"; 
} else if (priceSlider.value==4 && discount.checked){

    pageViewInput.innerHTML="500K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$ " + 24*12*0.75+".00" 
    greenLsideMob.style.width= "212px";

} else if (priceSlider.value==5 && discount.checked){

    pageViewInput.innerHTML="1M " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$ " + 36*12*0.75+".00"
    greenLsideMob.style.width= "264px";

}


})

//FOR DESKTOP:

slideDesktop.addEventListener("input", function(event){

    console.log(event.target.value);

    if(slideDesktop.value==0 &&!discount.checked){

        pagviewDEsktop.innerHTML="0 " + "pageviews".toUpperCase();
        monthPrice.innerHTML="$0.00"
        greenSlideDesk.style.width= "1px";
    
    }
    
      else if(slideDesktop.value==1 &&!discount.checked){

        pagviewDEsktop.innerHTML="10K " + "pageviews".toUpperCase();
        monthPrice.innerHTML="$8.00"
        greenSlideDesk.style.width= "86px";
   
    } else if (slideDesktop.value==2){

        pagviewDEsktop.innerHTML="50K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$12.00 "
        greenSlideDesk.style.width= "172px";
        
    } else if (slideDesktop.value==3){

        pagviewDEsktop.innerHTML="100K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$16.00 " 
        greenSlideDesk.style.width= "258px";
    } else if (slideDesktop.value==4){

        pagviewDEsktop.innerHTML="500K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$24.00 "
        greenSlideDesk.style.width= "343px"; 
    
    } else if (slideDesktop.value==5){

        pagviewDEsktop.innerHTML="1M " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$36.00 "
        greenSlideDesk.style.width= "428px";
    
    }
    if(slideDesktop.value==0 &&discount.checked){

        pagviewDEsktop.innerHTML="0 " + "pageviews".toUpperCase();
        monthPrice.innerHTML="$0.00"
        greenSlideDesk.style.width= "1px";
    
    }

       else if(slideDesktop.value==1 && discount.checked){

        pagviewDEsktop.innerHTML="10K " + "pageviews".toUpperCase();
        monthPrice.innerHTML="$ " + 8*12*0.75+".00"
        greenSlideDesk.style.width= "86px";
    
    } else if (slideDesktop.value==2 && discount.checked){
    
        pagviewDEsktop.innerHTML="50K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$ " + 12*12*0.75+".00"
        greenSlideDesk.style.width= "172px";
        
    } else if (slideDesktop.value==3 && discount.checked){
    
        pagviewDEsktop.innerHTML="100K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$ " + 16*12*0.75+".00" 
        greenSlideDesk.style.width= "258px";
    } else if (slideDesktop.value==4 && discount.checked){
    
        pagviewDEsktop.innerHTML="500K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$ " + 24*12*0.75+".00" 
        greenSlideDesk.style.width= "343px";
    
    } else if (slideDesktop.value==5 && discount.checked){
    
        pagviewDEsktop.innerHTML="1M " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$ " + 36*12*0.75+".00"
        greenSlideDesk.style.width= "428px";
    
    }

  


    })



//set the div to slider with pos. absolute and give related width size with slider value in listener. 



//slider - change default value
// spot insert image


















