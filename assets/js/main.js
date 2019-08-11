window.addEventListener('load', function(){
    // Navegação pelo menu
    const botoesMenu = document.querySelectorAll('[to]');
    botoesMenu.forEach(function(botaoMenu){
        botaoMenu.onclick = function(){
            const target = botaoMenu.getAttribute('to');
            const targetOffsetTop = document.querySelector(target).offsetTop;
            active(target);
            scrollYTo(targetOffsetTop);

        }
    });

    function active(elementTarget){
        botoesMenu.forEach(function(botaoMenu){
            botaoMenu.classList.remove('active');
            if(elementTarget == botaoMenu.getAttribute('to')){
                botaoMenu.classList.add('active');
            }
        })
    }


    (activeMenu = function(){
        console.log('sdffds')
        const elements = document.querySelectorAll('section.div');
        const Y = window.pageYOffset;
        elements.forEach(function(element){
            const top = element.offsetTop;
            const bottom = element.offsetTop + element.offsetHeight;
            console.log(top, bottom, Y)
            if(Y >= top && Y < bottom){
                const id = element.id;
                active(`#${id}`);                

            }
        })
    })();

    window.onscroll = function(){
        activeMenu();
    }

    setTimeout(function(){
        // Efeito de escrita
        const target = document.querySelector('.escrita')
        const writer = new Typewriter(target, {
            loop: true,
            typeSpeed: 100,
            deleteSpeed: 100,
            typeColor: '#fff',
            cursorColor: '#fff'
        })

        writer
            .type('Web')
            .rest(1000)
            .clear()
            .type('Front-end')
            .rest(1000)
            .clear()
            .type('Back-end')
            .rest(1000)
            .clear()
            .type('Fullstack')
            .rest(1000)
            .clear()
            .start()
    }, 1000)
});

function scrollYTo(Y){
    const currentY = window.pageYOffset;
    const desc = currentY > Y ? true : false;
    if(currentY != Y){
        let i = 1;
        let c = 1;
        if(desc){
            let temporizador = setInterval(function(){
                if(window.pageYOffset > Y){
                    window.scrollBy(0, (window.pageXOffset-i));
                }else{  
                    clearInterval(temporizador);
                }
                if(i<=20){
                    i += 0.2;
                }
                c++;
            }, 10);
        }else{
            let temporizador = setInterval(function(){
                if(window.pageYOffset < Y){
                    window.scrollBy(0, (window.pageXOffset+i));
                }else{  
                    clearInterval(temporizador);
                }
                if(i<=20){
                    i += 0.2;
                }
            }, 10)

        }
    }
}