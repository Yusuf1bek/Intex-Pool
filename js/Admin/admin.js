let products = JSON.parse(localStorage.getItem("products")) || []

// Title active start
let elFrameTitle = document.querySelector(".frame-title")
let elInflatableTitle = document.querySelector(".inflatable-title")

elFrameTitle.addEventListener("click", () =>{
    elFrameTitle.className = "frame-title font-bold text-[25px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398] cursor-pointer"
    elInflatableTitle.className = "inflatable-title font-bold text-[25px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent cursor-pointer"
    renderProducts(products, "1")
})
elInflatableTitle.addEventListener("click", () =>{
    elInflatableTitle.className = "inflatable-title font-bold text-[25px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398] cursor-pointer"
    elFrameTitle.className = "frame-title font-bold text-[25px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent cursor-pointer"
    renderProducts(products, "2")
})
// Title active end

// Modal start
let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")
let elCloseBtn = document.querySelector(".close-btn")
let elAddBtn = document.querySelector(".add-btn")

elModalWrapper.addEventListener("click", function(e){
    if(e.target.id == "modal-wrapper") elModalWrapper.classList.add("scale-0")
    })
function handleCloseClick(){
    elModalWrapper.classList.add("scale-0")
}

function handlAddProductBtnClick(){
    elModalWrapper.classList.remove("scale-0")
    elModalInner.innerHTML = `
        <button onclick="handleCloseClick()" class"close-btn">
            <img src="./images/close-icon.svg" alt="Close-Icon" width="25" height="25"/>
        </button>
        <form class="add-product-form">
        <label>
            <input class="chosed-input hidden" type="file"/>
            <img class="chosed-img mx-auto cursor-pointer bg-white" src="./images/empty-img.png" alt="Choose Img" width="90%" height="316" />
        </label>
        <div class="flex items-center justify-between px-10">
            <div class="w-[49%]">
            <label class="pl-[20px]">
                <div class="flex gap-[12px] mb-[5px]">
                    <img src="./images/category-icon.svg" alt="Category-Icon" width="25" height="25"/>
                    <span class="text-[20px] text-white font-normal">Категории</span>
                    </div>
                    <select class="p-3 text-[20px] pr-[115px] rounded-md mt-[2px] outline-none" name="category">
                        <option value="1">Каркасные</option>
                        <option value="2">Надувные</option>
                    </select>
            </label>
            </div>
            <div class="w-[49%]">
            <label class="pl-[20px]">
                <div class="flex gap-[12px] mb-[5px]">
                    <img src="./images/count.svg" alt="Count-Icon" width="25" height="25"/>
                    <span class="text-[20px] text-white font-normal">Количество</span>
                </div>
                <input class="p-3 text-[20px] rounded-md mt-[2px] outline-none" placeholder="Количество" name="productount" autocomplete="off" required />
            </label>
            </div>
        </div>
        <div class="flex items-center justify-between px-10">
            <div class="w-[49%]">
                <label class="pl-[20px]">
                        <div class="flex gap-[12px] mb-[5px]">
                            <img src="./images/price.svg" alt="price-img" width="25" height="25"/>
                            <span class="text-[20px] text-white font-normal">Стартая цена (сум) </span>
                        </div>
                    <input class="p-3 text-[20px] rounded-md mt-[2px] outline-none" placeholder="Стартая цена (сум) " name="oldPrice" autocomplete="off" required />
                </label>
            </div>
            <div class="w-[49%]">
                <label class="pl-[20px]">
                    <div class="flex gap-[12px] mb-[5px]">
                        <img src="./images/price.svg" alt="price-img" width="25" height="25"/>
                        <span class="text-[20px] text-white font-normal">Цена со скидкой (сум) </span>
                    </div>
                    <input class="p-3 text-[20px] rounded-md mt-[2px] outline-none" placeholder="Цена со скидкой (сум) " name="newPrice" autocomplete="off" required />
                </label>
            </div>
        </div>
            <div class="w-[49%] px-10">
                    <label class="pl-[20px]">
                        <div class="flex gap-[12px] mb-[5px]">
                            <img src="./images/frame.svg" alt="price-img" width="25" height="25"/>
                            <span class="text-[20px] text-white font-normal">Рамка</span>
                        </div>
                        <select class="p-3 text-[20px] pr-[115px] rounded-md mt-[2px] outline-none" name="productFrame">
                        <option id="1">Металлический</option>
                        <option id="2">Прямоугольная</option>
                        <option id="2">Рамка призмы</option>
                    </select>
                    </label>
                </div>
                <button  class="add-btn text-[20px] text-white rounded-[30px] bg-[#3F8C8E] w-[500px] m-auto py-[10px] mt-[10px] ml-[40px]">Добавить</button>
            </form>
            `
            let elAddProductForm = document.querySelector(".add-product-form")

            let elChosedInput = document.querySelector(".chosed-input")
            let elChosedImg = document.querySelector(".chosed-img")
            
            elChosedInput.addEventListener("change", function(e){
                elChosedImg.src = URL.createObjectURL(e.target.files[0])
                elChosedImg.classList.add("bg-white")
            })

            elAddProductForm.addEventListener("submit", (e) =>{
                e.preventDefault()
                const data = {
                    id:products.length ? products[products.length - 1].id + 1 : 1,
                    categoryId:e.target.category.value,
                    oldPrice:e.target.oldPrice.value,
                    newPrice:e.target.newPrice.value,
                    Frame:e.target.productFrame.value,
                    count:e.target.productount.value,
                    img:elChosedImg.src
                }
                products.push(data)
                const elAddBtn = document.getElementById('add-btn'); 
                if (elAddBtn) { 
                    elAddBtn.innerHTML = `
                        <img class='mx-auto scale-[1.2]' src="./images/loading.png" alt="loading" width="40" />
                     `;
                }
                setTimeout(() => {
                    elModalWrapper.classList.add("scale-0")
                    if(data.categoryId == "1"){
                         elFrameTitle.className = "frame-title font-bold text-[25px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398] cursor-pointer"
                        elInflatableTitle.className = "inflatable-title font-bold text-[25px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent cursor-pointer"
                    }
                    else{

                    }
                    renderProducts(products, data.categoryId)
                },1000)                
            })
}
// Modal end

// Render function start
let elProductRender = document.querySelector(".render-products")
function renderProducts(arr, categoryId){
    elProductRender.innerHTML = null
    const productDataFiltered = arr.filter(item => item.categoryId == categoryId)
    productDataFiltered.forEach(item => {
        let elProductsRow = document.createElement("tr")
        elProductsRow.innerHTML =  `
            <td>
                <img class="mx-auto" src="${item.img}" alt="Pool-Img" width="110" height="41">
            </td>
            <td class="text-start">
                <span class="text-[12px] text-[#A6A6A6] relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#FF0000] before:top-0 before:bottom-0  before:my-auto before:rotate-[5deg]">${item.oldPrice} сум</span>
                <br>
                <span class="font-bold text-[18px]">${item.newPrice} сум</span>
            </td>
            <td class="text-[20px]">${item.count}</td>
            <td class="text-[20px]">${item.Frame}</td>
            <td class="flex items-center space-x-[18px] h-[50px] rounded-[30px]">
                <button class="hover:scale-[1.3] duration-300">
                    <img src="./images/edit.svg" alt="Edit-Img" width="18" height="18">
                </button>
            <button onclick="handleDeleteProduct()" class="hover:scale-[1.3] duration-300">
                <img src="./images/delete.svg" alt="Delete-Img" width="18" height="18">
            </button>
            </td>
        `
        elProductRender.appendChild(elProductsRow)
    })
    localStorage.setItem("products", JSON.stringify(products))
}
renderProducts(products, "1")

// Render function end

// Delete function start
function handleDeleteProduct(id){
    elModalWrapper.classList.remove("scale-0")
    elModalInner.innerHTML = `
        <div>
            <h2 class="text-center text-[30px] font-bold text-white">Вы хотите удалить ?</h2>
            <div class="flex justify-between mt-10">
                <button onclick="cancelDeleteModal()"  class="add-btn bg-[#009398] w-[49%] py-[8px] text-white text-[25px] font-bold bg-[#00398] rounded-[25px]">Отмена</button>
                <button onclick="sureDeleteModal(${id})"  class="add-btn w-[49%] py-[8px] text-white text-[25px] font-bold bg-red-500 rounded-[25px]">Да</button>
            </div>
        </div>
    `
}
function cancelDeleteModal(){
    elModalWrapper.classList.add("scale-0")
}
function sureDeleteModal(id){
    const findIndexDelete = products.findIndex(item => item.id == id)
    const findObjToDelete = products.find(item => item.id == id)
    products.splice(findIndexDelete, 1)
    elModalWrapper.classList.add("scale-0")
    renderProducts([...products])
    localStorage.setItem("products", JSON.stringify(products))
}
// Delete function end

// Searching functions start
let elPopopList = document.querySelector(".popap-list")
let elSearchInpput = document.querySelector(".search-input")

elSearchInpput.addEventListener("input", function(e){
    elPopopList.innerHTML = null
    const filteredList = products.filter(item => item.newPrice.includes(e.target.value))
    if(e.target.value && filteredList.length){
        elPopopList.classList.remove("h-0")
        elPopopList.classList.remove("p-0")
        elPopopList.classList.add("p-2")
        filteredList.forEach((item, index) => {
            let elPopopItem = document.createElement("li")
            elPopopItem.id = item.id
            elPopopItem.className = "py-2 px-3 flex font-bold text-white rounded-md hover:bg-white hover:text-[#00398]"
            elPopopItem.innerHTML = `
                <span id=${item.id}${index + 1}></span>
                <strong>${item.categoryId == "1" ? "Каркасные" : "Надувные"}</strong>
                <p> id=${item.id}${item.newPrice}</p>
            `
            elPopopList.appendChild(elPopopItem)

            elPopopItem.addEventListener("click", function(e){
                const filteredProduct = products.filter(item => item.id == e.target.id)
                renderProducts(filteredProduct,filteredProduct[0].categoryId)
                if(filteredProduct[0].categoryId == "1"){
                    elFrameTitle.className = "frame-title font-bold text-[25px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398] cursor-pointer"
                    elInflatableTitle.className = "inflatable-title font-bold text-[25px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent cursor-pointer"
                }
                else{
                    elInflatableTitle.className = "inflatable-title font-bold text-[25px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398] cursor-pointer"
                    elFrameTitle.className = "frame-title font-bold text-[25px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent cursor-pointer"
                }
            })
        })
    }
    else{
        elPopopList.classList.add("h-0")
        elPopopList.classList.remove("p-2")
        elPopopList.classList.add("p-0")
        renderProducts(products, "1")
        elFrameTitle.className = "frame-title font-bold text-[25px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398] cursor-pointer"
        elInflatableTitle.className = "inflatable-title font-bold text-[25px] text-[#A6A6A6] pb-[8px] border-b-[2px] border-transparent cursor-pointer"
    }
})
elSearchInpput.addEventListener("blur", function(){
    setTimeout(() =>{
        elPopopList.classList.add("h-0")
        elPopopList.classList.remove("p-2")
        elPopopList.classList.add("p-0")
    })
})
// Searching functions end