const openmodelButton = document.querySelector('[data-model-target]')
const closemodelButton = document.querySelector('[data-close-button]')

openmodelButton.addEventListener("click",()=>{
    const modal = document.querySelector("video")
    openModel(modal)
})

closemodelButton.addEventListener("click",()=>{
    const modal = document.querySelector('video')
    closeModel(modal)
})

function openModel(modal){
    if(modal===null) return
    modal.classList.add('active')
    closemodelButton.classList.add('show')
}

function closeModel(modal){
    if(modal===null) return
    modal.classList.remove('active')
    closemodelButton.classList.remove('show')
}