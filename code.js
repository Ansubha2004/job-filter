let input=document.querySelector("input");
input.focus();
let filter=document.querySelector("#filter");
//storing skills in array
let arrskills=["xx"];
let c=0;
for(let obj of data)
    {
        obj["languages"].forEach((ele)=>{
            for(let elem of arrskills)
                {
                    if(elem===ele){
                        c=1;
                        break;
                    }
                    else
                    c=0;
                }
                if(c==0)
                    arrskills.push(ele);
        });
    }
    arrskills.shift();
//search element
const searchfunction=(val)=>{
    let c=0;
    for(let ele of arrskills)
        {
            if(ele.toLowerCase()===val.toLowerCase()){
                c=1;
                break;
            }
            else
            c=0;
        }
        if(c==1)
        return true;
        else
        return false;
};
//create the green box in the tab

const createnewelement=(val)=>{
    let tagelement=document.createElement("div");
    tagelement.setAttribute("class","league-spartan-fontstyle element");
    tagelement.innerText=val;
    let icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-xmark icon");
    tagelement.append(icon);
    input.before(tagelement);
};
//highlight the skills in the boxes
let skills=document.querySelectorAll(".skills ");
const highlightfunc=(val)=>{
    for(let s of skills)
        {
            let l=s.childElementCount;
            for(let i=0;i<l;i++){
                let str=s.children[i].innerText;
                if(str.toLowerCase()==val.toLowerCase())
                    s.children[i].setAttribute("class","boxes highlight");
            }
        }
};
const removehighlightfunc=(val)=>{
    for(let s of skills)
        {
            let l=s.childElementCount;
            for(let i=0;i<l;i++){
                let str=s.children[i].innerText;
                if(str.toLowerCase()==val.toLowerCase())
                    s.children[i].setAttribute("class","boxes");
            }
        }
};
let arr=["xx"];
arr.shift();
//filterout
const filterfunc=()=>{
    for(let str of skills)
        {
            let c=0;
            let l=str.childElementCount;
            for(let a of arr){
            for(let i=0;i<l;i++)
                {
                    let s=str.children[i].innerText;
                    if(a.toLowerCase()==s.toLowerCase()){
                        c++;
                        break;
                       }

                    }
                }
                if(c==arr.length)
                    str.parentElement.setAttribute("style","");
                else
                str.parentElement.setAttribute("style","display:none");
                 }
        }
        
//highlighting the elements to be filtered

input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter")
    {
        let valinput=input.value;
        if(valinput.trim()=="")
            input.placeholder="Enter something to search";
        else{
            input.placeholder="";
            input.value="";
            if(searchfunction(valinput)==true){
                arr.push(valinput);
                createnewelement(valinput);
                highlightfunc(valinput);
                filterfunc();
            }
        }
        //close button
        let closebutton=document.querySelectorAll("i");
        for(let close of closebutton)
        {close.addEventListener("click",()=>{
            close.parentElement.setAttribute("style","display:none");
            removeelementfromarray(close.parentElement.innerText);
            console.log(arr);
            resetfunc1();
            removehighlightfunc(close.parentElement.innerText);
            console.log(close.parentElement.innerText);
            filterfunc();
        });}
}});
const removeelementfromarray=(val)=>{
    let l=arr.length;
    for(let i=0;i<l;i++)
    {
       
        if(arr[i]==val){
            arr[i]=arr[l-1];
            arr[l-1]=val;
            break;
        }
    }
    arr.pop();
}
//remove function
const resetfunc=()=>{
    for(let s of skills)
        {

            for(let i=0;i<s.childElementCount;i++)
            s.children[i].setAttribute("class","boxes");
            s.parentElement.setAttribute("style","");
            let tags=document.querySelectorAll(".element");
            for(let tag of tags)
                tag.remove();
        }
};
const resetfunc1=()=>{
    for(let s of skills)
        s.parentElement.setAttribute("style","");
};

//clear button
let clearbtn=document.querySelector("#clear");
clearbtn.addEventListener("click",()=>{
    arr=["xx"];
    arr.shift();
    resetfunc();   
});
