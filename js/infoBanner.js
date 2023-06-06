AFRAME.registerComponent("info-banner",{
    schema:{
      itemId: {default:"",type:"string"},
    },
    update:function(){
      this.createBanner();
    },
    createBanner: function() {
      postersInfo = [
         {
          url: "./assets/avengers_2.png",
          title: "The Avengers",
          released_year: "1963",
          description:
            "The Avengers are a team of superheroes appearing in American comic books published by Marvel Comics, created by writer-editor Stan Lee and artist/co-plotter Jack Kirby.",
        },
         {
          url: "./assets/spider_man_2.gif",
          title:"Spiderman",
          released_year: "1962",
          description:
            "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
        },
         {
          url: "./assets/dead_pool_2.jpg",
          title: "Deadpool",
          released_year: "1990",
          description:
            "Deadpool is a character appearing in American comic books published by Marvel Comics. Created by Fabian Nicieza and Rob Liefeld.",
        },
         {
          url: "./assets/fantastic_four_2.jpg",
          title: "The Fantastic Four",
          released_year: "1961",
          description:
            "The Fantastic Four is a superhero team appearing in American comic books published by Marvel Comics.!",
        },
    ]
      const {itemId}=this.data;
  
      const fadeBackgroundEl=document.querySelector("#fadeBackground");
  
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("id",`${itemId}-banner`);
  
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:0.9,
        height:1,
      });
  
      entityEl.setAttribute("material",{ color: "#000" });
      entityEl.setAttribute("position",{ x: 0, y: 0.1, z:-1 });
  
      const item=postersInfo[itemId];
  
      const imageEl=this.createImageEl(item);
      const titleEl=this.createTitleEl(item);

      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl:function(item) {
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:0.85,
        height:0.4,
      });
      entityEl.setAttribute("material",{src:item.url});
      entityEl.setAttribute("position",{x:0,y:0.3,z:0.05});
      return entityEl;
    },
    createTitleEl:function(position,item){
        const entityEl=document.createElement("a-entity");
        entityEl.setAttribute("text",{
          font:"exo2bold",
          align:"center",
          width:70,
          color:"#e65100",
          value:item.title,
        });
   
      entityEl.setAttribute("position",{x:-0.4,y:0.02,z:0.05});
      return entityEl;
    },
   
  });