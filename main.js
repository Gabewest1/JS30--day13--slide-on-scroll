(function() {
    const images = document.querySelectorAll("img")
    let isFadingIn = false
    document.addEventListener("scroll", debounce(slideInImages))
    function slideInImages(e) {
        console.log("ISFADINGIN:", isFadingIn)
        
        console.count(e)
        let topOfScreen = window.scrollY
        let bottomOfScreen = topOfScreen + window.innerHeight
    
        images.forEach(img => {
            const { offsetTop, clientHeight } = img
            const imgTop = offsetTop
            const imgBottom = imgTop + clientHeight
            const isImageShowing = 
                topOfScreen < imgTop && imgTop < bottomOfScreen ||
                topOfScreen < imgBottom && imgBottom < bottomOfScreen

            if (isImageShowing) {
                img.classList.add("active")
            } else {
                img.classList.remove("active")
            }
        })

        isFadingIn = false
    }

    function debounce(fn, wait = 100) {
        let timeout
        
        return () => {
            if (timeout) {
                console.log("CANCELLING")
                return
            }

            timeout = setTimeout(() => {
                fn()
                timeout = false
            }, wait)
        }
    }
})()