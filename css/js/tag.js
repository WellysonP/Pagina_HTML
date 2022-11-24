const colors ={
    p: "#388e3c",
    div: "#1565C0",
    span: "#e53935",
    section: "#f6709",
    ul: "#5e35b1",
    ol: "#fbc02d",
    header: "#d1b60",
    nav: "#64dd17",
    main: "#00acc1",
    footer: "#304ffe",
    form: "#9f6581",
    body: "#25b6da",
    padrao: "#616161",
    get(tag){
        return this[tag] ? this[tag] : this[this.padrao]
    }
}

document.querySelectorAll(".tag").forEach(box=>{
    const tagName = box.tagName.toLowerCase()

    box.style.borderColor = colors.get(tagName)

    if(!box.classList.contains("nolabel")){
        const label = document.createElement("label")
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
    }
})