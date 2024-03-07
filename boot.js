let opt = document.querySelectorAll(".opt");

opt.forEach(opt =>{
    opt.addEventListener("mouseenter",()=>{
        opt.style.fontSize = "20px"
    })
    opt.addEventListener("mouseleave",()=>{
        opt.style.fontSize = "16px"
    })
})

