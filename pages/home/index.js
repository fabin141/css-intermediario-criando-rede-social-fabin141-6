const ulPosts = document.querySelector("#posts")
// const buttonFinal = document.querySelector('#btn')

// buttonFinal.addEventListener('click', function(){
//     console.log('oi')
// })

function createPost(listaUm, listaDois){
    for(let i = 0; i < listaUm.length; i++){
        let listPost = document.createElement('li')
        let listDivOne = document.createElement('div')
        let listDivOne_img = document.createElement('img')
        let listDivOne_div = document.createElement('div')
        let listDivOne_div_pOne = document.createElement('p')
        let listDivOne_div_pTwo = document.createElement('p')
        let listDivTwo = document.createElement('div')
        let listDivTwo_h2 = document.createElement('h2')
        let listDivTwo_p = document.createElement('p')
        let listDivThree = document.createElement('div')
        let listDivThree_btn = document.createElement('button')
        let listDivThree_btnTwo = document.createElement('button')

        listPost.classList = "flex_column gap-1"
        listDivOne.classList = "flex_row gap-2"
        listDivOne_img.classList = "img_formatting"
        listDivOne_div.classList = "flex_column gap-3"
        listDivOne_div_pOne.classList = "title-2"
        listDivOne_div_pTwo.classList = "text-2"
        listDivTwo.classList = "post_fullComment"
        listDivTwo_h2.classList = "title-1 mb-2"
        listDivTwo_p.classList = "text-1"
        listDivThree.classList = "flex_row align_center gap-3"
        listDivThree_btn.classList = "button border_radius-1 border-2 button_grey"

        listDivOne_img.src = listaUm[i].img
        listDivOne_div_pOne.innerText = listaUm[i].user
        listDivOne_div_pTwo.innerText = listaUm[i].stack
        listDivTwo_h2.innerText = listaDois[i].title
        listDivTwo_p.innerText = listaDois[i].text
        listDivThree_btn.innerText = "Abrir post"

        listDivThree_btn.addEventListener("click", function(){

        const modalWrapper = document.createElement("div")
        const modalMain = document.createElement("div")
        const modalDivOne = document.createElement("div")
        const modalCloseBtn = document.createElement("button")
        const modalImg = document.createElement("img")
        const modalInformation = document.createElement("div")
        const modalName = document.createElement("h3")
        const modalJob = document.createElement("p")
        const modalDivTwo = document.createElement("div")
        const modalPostName = document.createElement("h2")
        const modalPostFull = document.createElement("p")

        modalWrapper.classList = "modal_wrapper"
        modalMain.classList = "modal"
        modalDivOne.classList = "modal_div-1"
        modalImg.classList = "modal_div1-img"
        modalInformation.classList = "modal_div1-information"
        modalName.classList = "title-2"
        modalJob.classList = "text-2"
        modalDivTwo.classList = "modal_div-2"
        modalPostName.classList = "title-1 mb-2"
        modalPostFull.classList = "text-1"
        modalCloseBtn.classList = "modal_closeButton"

        modalWrapper.id = "modalWrap"
        modalCloseBtn.id = "modalClose"

        modalImg.src = listaUm[i].img
        modalName.innerText = listaUm[i].user
        modalJob.innerText = listaUm[i].stack
        modalPostName.innerText = listaDois[i].title
        modalPostFull.innerText = listaDois[i].text
        modalCloseBtn.innerText = "X"

        modalInformation.append(modalName, modalJob)
        modalDivOne.append(modalImg, modalInformation, modalCloseBtn)
        modalDivTwo.append(modalPostName, modalPostFull)
        modalMain.append(modalDivOne, modalDivTwo)
        modalWrapper.append(modalMain)
    
        const mainSection = document.getElementById("parentModal")
        mainSection.appendChild(modalWrapper)
        
        const btnClose = document.getElementById("modalClose")
        const wrapper = document.getElementById("modalWrap")
    
        btnClose.addEventListener("click", function(){
            wrapper.remove()
        })
        })

        listDivOne_div.append(listDivOne_div_pOne, listDivOne_div_pTwo)
        listDivOne.append(listDivOne_img, listDivOne_div)
        listDivTwo.append(listDivTwo_h2, listDivTwo_p)
        listDivThree.append(listDivThree_btn,listDivThree_btnTwo)
        listPost.append(listDivOne, listDivTwo, listDivThree)
        ulPosts.appendChild(listPost)
    }
}

createPost(users, posts)
