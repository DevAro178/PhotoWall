let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let body = document.querySelector('body');
var Previnp = document.getElementById("previmgInp");
let ImgTagPrev= document.getElementById("previmg");


let showDrop=(this0,event)=>{
  let temp=this0.querySelector("i");
  let temp1=this0.querySelector(".Edit");
  let temp2=this0.querySelector(".Delete");
  if(event.target==temp){
    let temp=this0.querySelector(".dropdown-content").style.display="block";
  }else{
    let temp=this0.querySelector(".dropdown-content").style.display="none";
  }
  if(event.target==temp1){
    ShowModalEdit(this0.id);
  }
  if(event.target==temp2){
    DelModal(this0.id);
  }
}

let ShowModalEdit=(event)=>{
  let temp=document.getElementById(event);
  // Img Url Variables
  let temp1=temp.getElementsByClassName("imgBx");
  let temp2=temp1[0].querySelector("img");
  let imgURL=temp2.src;
  // Title Variables
  let temp3=temp.getElementsByClassName("textBx");
  let temp4=temp3[0].querySelector("h3");
  let Title=temp4.innerHTML;
  // Description Variables
  let temp6=temp3[0].querySelector("p");
  let Desc=temp6.innerHTML;
  // Posting Values to the Modal
  let IdInp=document.getElementById("IdPost").value=event;
  let TitleP=document.getElementById("TitlePost").value=Title;
  let DescP=document.getElementById("DescPost").innerHTML=Desc;
  let ImgP=document.getElementById("previmg").src=imgURL;
  let Submit=document.getElementById("Do").value="Update";
  // Changing Display of Modal
  modal.style.display = "block";
  // Checking if image URL is not blank
  if(imgURL)
    ImgTagPrev.style.display="block";
  
}

let InPClck=()=>{
    Previnp.click();
}
        
themeToggle=()=>{
    body.classList.toggle('dark')
}

function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    navigation.classList.remove('active');
    main.classList.remove('active');
}


Previnp.onchange = (event) => {
  const [file] = Previnp.files
  if (file) {
    ImgTagPrev.style.display="block";
    ImgTagPrev.src = URL.createObjectURL(file)
  }
}