(()=>{
    //---------------SLIDER-----------------
    const slider = document.querySelector(".slider")
    const allSlide = document.querySelectorAll(".sub-slider")
    
    let [wheelBool, x] = [true, 2]
    const toComplete = "slide"

    const stateboard = [
        ["3", "4", "0", "1", "2"],
        ["4", "0", "1", "2", "3"],
        ["0", "1", "2", "3", "4"],
        ["1", "2", "3", "4", "0"],
        ["2", "3", "4", "0", "1"], 
    ]

    const slideX = (x, e) =>{
        if(e.deltaY > 0){
            x++ 
            if(x > 4) x = 0
        }
        else {
            x--
            if(x < 0) x = 4
        } 
        return x
    }

    const initChange = (x) =>{
        for(let i = 0; i < allSlide.length; i++){
            const className = toComplete + (stateboard[x][i])
            allSlide[i].classList.remove(allSlide[i].classList[1])
            allSlide[i].classList.add(toComplete+stateboard[x][i])
        }
    }

    slider.addEventListener("wheel", (e)=>{
        if(wheelBool){
            x = slideX(x, e)
            initChange(x)
            
            wheelBool = false
            setTimeout(()=>{
                wheelBool = true
            }, 250)
        }
    })
})()