(function(){

    function makeMole(){
        var molePosX = Math.round(
            Math.random() * (window.innerWidth - window.innerHeight/10)
        )
        var molePosY = Math.round(
            Math.random() * (window.innerHeight - window.innerHeight/10)
        )

        var mole = document.createElement('div')

        mole.classList.add('mole')

        console.log(mole.style)

        mole.style.left = molePosX + 'px'
        mole.style.top = molePosY + 'px'

        document.querySelector('body').appendChild(mole)
    }

    makeMole()
})()