let elFrameTitle = document.querySelector(".frame-title")
let elInflatableTitle = document.querySelector(".inflatable-title")

elFrameTitle.addEventListener("click", () =>{
    elFrameTitle.className = "frame-title font-bold text-[25px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398] cursor-pointer"
    elInflatableTitle.className = "inflatable-title font-bold text-[25px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent cursor-pointer"
})
elInflatableTitle.addEventListener("click", () =>{
    elInflatableTitle.className = "inflatable-title font-bold text-[25px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398] cursor-pointer"
    elFrameTitle.className = "frame-title font-bold text-[25px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent cursor-pointer"
})