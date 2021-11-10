// Add event listener to the page!


//send to gallery page with specific category selected!
ecommerceApp.categories = document.querySelectorAll('.categoryLink')

ecommerceApp.addLinks = () => {
    ecommerceApp.categories.forEach(item => {
        item.addEventListener('click', function() {

            const id = item.id
            console.log(id)
            window.location.assign(`products.html?category=${id}`)
        })
    })
}


// added opacity on hover on sibling element!
const leftAndRight = document.querySelectorAll('.testCategory img')

leftAndRight.forEach(image => {
    console.log(image.classList.contains('left'))
    const right = document.querySelector('.right')
    const left = document.querySelector ('.left')
    if (image.classList.contains('left')) {
        image.addEventListener('mouseover', function(){
            right.style.opacity = '0.7'
        })
        image.addEventListener('mouseout', function(){
            right.style.opacity = '1'
        })
    } else {
        image.addEventListener('mouseover', function(){
            left.style.opacity = '0.7'
        })
        image.addEventListener('mouseout', function(){
            left.style.opacity = '1'
    })
}})

// trying offset width?
const section1Width= document.querySelector(".testCategory .section1").offsetWidth
console.log(section1Width)
const p = document.querySelector('.testCategory .section1 p')
p.style.left = `${section1Width}px`;


//rotating button functionality
const button = document.querySelector('.coolLoader')
const toggleRotate = function() {
    const border = document.querySelector('.buttonBorder')
    border.classList.toggle('rotate')
}
button.addEventListener('mouseover', function() {
    const border = document.querySelector('.buttonBorder')
    border.classList.toggle('rotate')
})
button.addEventListener('mouseout', function() {
    const border = document.querySelector('.buttonBorder')
    border.classList.toggle('rotate')
})





// const toggleRotate = function() {
//     const border = document.querySelector('.buttonBorder')
//     border.classList.toggle('rotate')
// }
// button.addEventListener('mouseover', toggleRotate())
// button.addEventListener('mouseout', toggleRotate())




//New Releases section.

ecommerceApp.displayNewReleases = function(array) {
    console.log(ecommerceApp.products[0])

    // ecommerceApp.products.filter(item => {
    //     return
    // })
    const newReleases = document.querySelector('.newReleases')
    for( let i = 0; i < 3; i++) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="gridItem2">
            <img src="${ecommerceApp.products[i].image}" alt="">
        </div>`
        newReleases.appendChild(div)


    }
}