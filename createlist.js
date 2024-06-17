let maintag=document.querySelector("main");
//accessing every object with loop
for(let obj of data)
    {
        //creating boxes
        let box=document.createElement("div");
        box.setAttribute("class","box");
        box.setAttribute("id",obj["id"]);
        maintag.append(box);
        //designing each box
        let image=document.createElement("img");//inserted image
        imagelink=obj["logo"].slice(9);
        image.setAttribute("src",imagelink);
        image.setAttribute("class","img");
        box.append(image);        
        let f="league-spartan-fontstyle";
        let description=document.createElement("div");//creating cointainer tag holding recruiter content and details
        description.setAttribute("class",f.concat(" description"));
        box.append(description);
        //inside description tag
        let topline=document.createElement("div");//topline
        topline.setAttribute("class","topline");
        description.append(topline);
        //elements of topline
        let classes=["companyname","new","featured"];
        let content=[obj["company"],"NEW!","FEATURED"];
        for(let i=0;i<3;i++)
            {
                let toppara=document.createElement("p");
                toppara.setAttribute("class",classes[i]);
                topline.append(toppara);
                if((toppara.className=="new" && obj["new"]==false)||(toppara.className=="featured" && obj["featured"]==false))
                    toppara.remove();
                else
                toppara.innerText=content[i];
            }
        //position and role in company
        let position=document.createElement("p");
        position.setAttribute("class","position");
        description.append(position);
        position.innerText=obj["position"];
        //bottomline
        let bottomline=document.createElement("div");
        bottomline.setAttribute("class","bottomline");
        description.append(bottomline);
        //inside bottomline
        let classes1=["lastactive","dot","nature","dot","location"];
        let content1=[obj["postedAt"],".",obj["contract"],".",obj["location"]];
        for(let i=0;i<5;i++)
            {
                let bottompara=document.createElement("p");
                bottompara.setAttribute("class",classes1[i]);
                bottompara.innerText=content1[i];
                bottomline.append(bottompara);
            }
        //skills
        let skills=document.createElement("div");
        skills.setAttribute("class",f.concat(" skills"));
        box.append(skills);
        //inside skills
        for(let i of obj["languages"])
            {
                let lang=document.createElement("div");
                lang.setAttribute("class","boxes");
                lang.innerText=i;
                skills.append(lang);
            }        
    }