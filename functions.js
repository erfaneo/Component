const accordionH2 = document.querySelectorAll(".AccordionH2")
const accordionP = document.querySelectorAll(".AccordionP")
const accordionCntrP = document.querySelectorAll(".AccordionCntrP")
const AccordionIcons = document.querySelectorAll(".AccordionIcons")
accordionH2.forEach((element, i) => {
    element.addEventListener("click", ()=> {
        accordionP[i].classList.toggle("Active")
        accordionCntrP[i].classList.toggle("Active")
        AccordionIcons[i].classList.toggle("bi-caret-up")
        AccordionIcons[i].classList.toggle("bi-caret-down")
    })
})

// Collapse
const CollapseCntrP = document.querySelector(".CollapseCntrP")
const CollapseBtn = document.querySelector(".CollapseBtn")
const pCollpase = document.querySelector("#Collapse p")
CollapseBtn.addEventListener("click", ()=> {
    CollapseCntrP.classList.toggle("unCollapse")    
    pCollpase.classList.toggle("pCollapse")
})
// Collapse

// DropDown
const DropBtn = document.querySelector(".DropBtn")
const dropDown = document.querySelector(".Drop")
DropBtn.addEventListener("mouseover", ()=> {
    dropDown.classList.add("ActiveDrop")
})
dropDown.addEventListener("mouseover", ()=> {
    dropDown.classList.add("ActiveDrop")
})
DropBtn.addEventListener("mouseleave", ()=> {
    dropDown.classList.remove("ActiveDrop")
})
dropDown.addEventListener("mouseleave", ()=> {
    dropDown.classList.remove("ActiveDrop")
})
// DropDown

// Modal
const modalBtn = document.querySelector(".modalBtn") 
const modalMsg = document.querySelector(".modalMsg")
const modalCntr = document.querySelector(".modalCntr")
const displayGroup = document.querySelectorAll(".displayGroup")
const modalBg = document.querySelector(".modalBg")
const closeModal = document.querySelector(".closeModal")
modalBtn.addEventListener("click", () => {
    modalMsg.classList.toggle("modalMsgActive")
    modalCntr.classList.toggle("modalMsgActive")
    modalBg.classList.toggle("d-none")
})
closeModal.addEventListener("click", () => {
    modalMsg.classList.toggle("modalMsgActive")
    modalCntr.classList.toggle("modalMsgActive")
    modalBg.classList.toggle("d-none")
})
// Modal