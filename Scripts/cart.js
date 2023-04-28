let Cdata=JSON.parse(localStorage.getItem("bag"))||[];
console.log(Cdata)
let totalCart=Cdata.length;

let bag=document.getElementById("num");
bag.innerText=+totalCart;


function appendData(data){
    // console.log(data)
    let products_div=document.getElementById("myproducts");

    // products_div.innerHTML=null;

    data.forEach((el,i)=>{
        console.log(el)
        let div=document.createElement("div");
        div.className="card"
        
        

        let img=document.createElement("img");
        img.src=el.image;
        img.className="image_s";
        img.addEventListener("click",()=>{
            addToCart(el,i);
        })

        let p_name=document.createElement("p");
        p_name.innerText= el.discount;
        p_name.className="title";

        let p_price=document.createElement("p");
        p_price.innerText="₹ "+el.price;
        p_price.className="prc";
        p_price.style.marginTop="5px"
        p_price.style.marginLeft="130px";

        let myp_div=document.createElement("div");
        myp_div.className="flex";
        myp_div.append(p_price)


        let Delete= document.createElement("button")
        Delete.innerHTML="Delete";
        Delete.style.margin="auto";
        Delete.style.marginTop="10px"
        Delete.style.padding="10px"
        Delete.style.width="100%"
        Delete.style.border="0px"
        Delete.style.backgroundColor="gray"
        Delete.onclick=()=>{
            deleteFunc(i)
        }
           div.append(p_name,img,myp_div,Delete);
        products_div.append(div);

       

    })
}

appendData(Cdata);


let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    movetoPayment();
})

function movetoPayment(){
    window.location.href="payment.html"
}




let Price=0
function price(data){
    data.forEach(function(el){
        Price=Price+el.price
        //console.log(Price)   
        document.getElementById("total_price").innerHTML=Price
    })
}



price(Cdata)

const deleteFunc =(i)=>{
Cdata.splice(i,1)
localStorage.setItem("bag",JSON.stringify(Cdata))
window.location.reload();
//console.log(i)
}




let login_data = JSON.parse(localStorage.getItem('login_data'));

let login_logo = document.getElementById('loginID');
login_logo.innerText=login_data[0].username;
   

