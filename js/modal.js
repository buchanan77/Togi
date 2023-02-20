let template = document.querySelector('.modal-container');
let containerProduct = document.querySelector('.container-products');
let modal = document.querySelector('.modal');
let fragment = document.createDocumentFragment();
let btnScrolltop = document.querySelector('.btn-scrolltop');


// const products = [
//     {title:'Alfajor triple mousse', img:'/assets/alfajor1.png', description: 'Alfajor Milka Mousse: Les traemos un riquísimo alfajor de la marca Milka, con un baño de chocolate con leche con el sabor que caracteriza a estos chocolates. El relleno de este producto es un suave mousse dándole un toque especial a dicho alfajor.'},

//     {title:'Alfajor glaseado', img:'/assets/alfajor2.png', description: 'Alfajor Milka Mousse: Les traemos un riquísimo alfajor de la marca Milka, con un baño de chocolate con leche con el sabor que caracteriza a estos chocolates. El relleno de este producto es un suave mousse dándole un toque especial a dicho alfajor.'},

//     {title:'Alfajor triple dulce de leche', img:'/assets/alfajor3.png', description: 'Alfajor Milka Mousse: Les traemos un riquísimo alfajor de la marca Milka, con un baño de chocolate con leche con el sabor que caracteriza a estos chocolates. El relleno de este producto es un suave mousse dándole un toque especial a dicho alfajor.'},

//     {title:'Chocolate con almendras', img:'/assets/chocolate1.png', description: 'Alfajor Milka Mousse: Les traemos un riquísimo alfajor de la marca Milka, con un baño de chocolate con leche con el sabor que caracteriza a estos chocolates. El relleno de este producto es un suave mousse dándole un toque especial a dicho alfajor.'},

//     {title:'Chocolate con mani', img:'/assets/chocolate2.png', description: 'Alfajor Milka Mousse: Les traemos un riquísimo alfajor de la marca Milka, con un baño de chocolate con leche con el sabor que caracteriza a estos chocolates. El relleno de este producto es un suave mousse dándole un toque especial a dicho alfajor.'},

//     {title:'Chocolate Semiamargo', img:'/assets/chocolate3.png', description: 'Alfajor Milka Mousse: Les traemos un riquísimo alfajor de la marca Milka, con un baño de chocolate con leche con el sabor que caracteriza a estos chocolates. El relleno de este producto es un suave mousse dándole un toque especial a dicho alfajor.'},

//     {title:'Bombones Seitu con dulce de leche', img:'/assets/bombones1.png', description: 'Alfajor Milka Mousse: Les traemos un riquísimo alfajor de la marca Milka, con un baño de chocolate con leche con el sabor que caracteriza a estos chocolates. El relleno de este producto es un suave mousse dándole un toque especial a dicho alfajor.'},

//     {title:'Bombones Seitu Semiamargo', img:'/assets/bombones2.png', description: 'Alfajor Milka Mousse: Les traemos un riquísimo alfajor de la marca Milka, con un baño de chocolate con leche con el sabor que caracteriza a estos chocolates. El relleno de este producto es un suave mousse dándole un toque especial a dicho alfajor.'}
// ];




document.addEventListener('click', (e)=>{   


        if(e.target.matches('.btn-scrolltop')){
             window.scrollTo(0,0);
        };



        if(e.target.matches('.btn-product')){

            modal.classList.remove('modal-close');
            
        
            setTimeout(()=>{
                modal.style.opacity = '1';
                template.style.visibility = 'visible';
            },900);

            console.log(e.bubbles)
        
        };


        if(e.target.matches('.btn-close')){
        
            modal.classList.add("modal-close");
        
            setTimeout(()=>{
                modal.style.opacity = '0';
                template.style.visibility = 'hidden';
            },900);
        };
    
})


window.onscroll = ()=>{
    window.scrollY >= 2000 
    ? btnScrolltop.classList.add('btn-scrolltop-on')
    : btnScrolltop.classList.remove('btn-scrolltop-on');
};









// document.addEventListener('click', (e)=>{   

//     if(e.target.matches('.btn-product')){
//         e.preventDefault()
//         modal.classList.remove('modal-close');
        
    
//         setTimeout(()=>{
//             modal.style.opacity = '1';
//             template.style.visibility = 'visible';
//         },900);
    
//     }


//     if(e.target.matches('.btn-close')){
//         e.preventDefault();
    
//         modal.classList.add("modal-close");
    
//         setTimeout(()=>{
//             modal.style.opacity = '0';
//             template.style.visibility = 'hidden';
//         },900);
//     };

// })

