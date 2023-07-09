//Tab menu min project

const buttonWrapper = document.querySelector('.buttonWrapper'),
tabButtons = document.querySelectorAll('.tab-button'),
contents = document.querySelectorAll('.content')


buttonWrapper.addEventListener('click' , (e) => {
    
    const mainContentId = e.target.dataset.id
    const mainContent = document.querySelector(`#${mainContentId}`)
    
    tabButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active')

    contents.forEach(content => content.classList.remove('active'))
    mainContent.classList.add('active')
})

//background-color change by load

const hexGen = () => {
    return `#${Math.random().toString(16).slice(2,8)}`
}


window.addEventListener("load",()=>{
    const backgroundColorCode = hexGen();
    document.body.style.backgroundColor = backgroundColorCode;
})