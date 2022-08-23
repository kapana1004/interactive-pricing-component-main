

const priceSlider = document.querySelector(".slider");
let pageViewInput = document.querySelector(".pageviewers");
let slideDesktop = document.getElementById("slidedesk");
let pagviewDEsktop = document.getElementById("pageviewDesk");
let monthPrice = document.querySelector(".dollarspan");
let monthPriceMob = document.querySelector(".dollarspanmob");
let discount = document.querySelector(".check");


discount.addEventListener("input", function(){

  if(discount.checked){
    pageViewInput.innerHTML="10K " + "pageviews".toUpperCase();
    monthPriceMob.innerHTML="$ " + 8*12*0.75+".00";
    pagviewDEsktop.innerHTML="10K " + "pageviews".toUpperCase();
    monthPrice.innerHTML="$ " + 8*12*0.75+".00";
    //slideDesktop.value.innerHTML==1 არ ბრუნდება სლაიდერი საწყის პოზიციაში


  }else if(!discount.checked){

    pageViewInput.innerHTML="10K " + "pageviews".toUpperCase();
    monthPriceMob.innerHTML="$8"
    pagviewDEsktop.innerHTML="10K " + "pageviews".toUpperCase();
    monthPrice.innerHTML="$8"
    priceSlider.value.innerHTML==1;

  }


})

priceSlider.addEventListener("input", function(){


if(priceSlider.value==0 &&!discount.checked){

        pageViewInput.innerHTML="0 " + "pageviews".toUpperCase();
        monthPriceMob.innerHTML="$0.00"
    
    }
if(priceSlider.value==1 &&!discount.checked){

    pageViewInput.innerHTML="10K " + "pageviews".toUpperCase();
    monthPriceMob.innerHTML="$8.00"

} else if (priceSlider.value==2 &&!discount.checked){

    pageViewInput.innerHTML="50K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$12.00 "
    
} else if (priceSlider.value==3 &&!discount.checked){

    pageViewInput.innerHTML="100K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$16.00 " 
} else if (priceSlider.value==4 &&!discount.checked){

    pageViewInput.innerHTML="500K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$24.00 " 

} else if (priceSlider.value==5 &&!discount.checked){

    pageViewInput.innerHTML="1M " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$36.00 "

}
//ვერ დავიჭირე ველიუ (რიცხვითი მნიშვნელობისთვის), რომ მათემატიკური მოქმედება შევასრულო


// if(discount.checked){
    

//     const totalValue = (monthPriceMob-monthPriceMob*0.25);
//     monthPriceMob.innerHTML = totalValue;
// }  

if(priceSlider.value==1 && discount.checked){

    pageViewInput.innerHTML="10K " + "pageviews".toUpperCase();
    monthPriceMob.innerHTML="$ " + 8*12*0.75+".00"

} else if (priceSlider.value==2 && discount.checked){

    pageViewInput.innerHTML="50K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$ " + 12*12*0.75+".00"
    
} else if (priceSlider.value==3 && discount.checked){

    pageViewInput.innerHTML="100K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$ " + 16*12*0.75+".00" 
} else if (priceSlider.value==4 && discount.checked){

    pageViewInput.innerHTML="500K " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$ " + 24*12*0.75+".00" 

} else if (priceSlider.value==5 && discount.checked){

    pageViewInput.innerHTML="1M " + "pageviews".toUpperCase()
    monthPriceMob.innerHTML="$ " + 36*12*0.75+".00"

}


})


slideDesktop.addEventListener("input", function(event){

    console.log(event.target.value);
    
    if(slideDesktop.value==1 &&!discount.checked){

        pagviewDEsktop.innerHTML="10K " + "pageviews".toUpperCase();
        monthPrice.innerHTML="$8.00"
   
    } else if (slideDesktop.value==2){

        pagviewDEsktop.innerHTML="50K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$12.00 "
        
    } else if (slideDesktop.value==3){

        pagviewDEsktop.innerHTML="100K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$16.00 " 
    } else if (slideDesktop.value==4){

        pagviewDEsktop.innerHTML="500K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$24.00 " 
    
    } else if (slideDesktop.value==5){

        pagviewDEsktop.innerHTML="1M " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$36.00 "
    
    }

    if(slideDesktop.value==1 && discount.checked){

        pageViewInput.innerHTML="10K " + "pageviews".toUpperCase();
        monthPrice.innerHTML="$ " + 8*12*0.75+".00"
    
    } else if (slideDesktop.value==2 && discount.checked){
    
        pageViewInput.innerHTML="50K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$ " + 12*12*0.75+".00"
        
    } else if (slideDesktop.value==3 && discount.checked){
    
        pageViewInput.innerHTML="100K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$ " + 16*12*0.75+".00" 
    } else if (slideDesktop.value==4 && discount.checked){
    
        pageViewInput.innerHTML="500K " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$ " + 24*12*0.75+".00" 
    
    } else if (slideDesktop.value==5 && discount.checked){
    
        pageViewInput.innerHTML="1M " + "pageviews".toUpperCase()
        monthPrice.innerHTML="$ " + 36*12*0.75+".00"
    
    }

    slideDesktop.style.background = `linear-gradient(
		to right,
		hsl(174, 77%, 80%) 0%,
		hsl(174, 77%, 80%),
		 hsl(224, 65%, 95%) 50%,
		 hsl(224, 65%, 95%) 100%
	)`;


    })



//set the div to slider with pos. absolute and give 1px width. 
//in js adding eventlistener on slider and give him function: 
//with for loop catch the new div`s width  
    //let i = newDiv.style.width.length;
    //for("i=1, i<=100, i++"){newDiv.style.background-color:rgba(164, 243, 235, 1)}






















