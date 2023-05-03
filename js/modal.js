const modalContainer = document.querySelector('.modal-container');
const containerProduct = document.querySelector('.container-products');
const modal = document.querySelector('.modal');
const fragment = document.createDocumentFragment();
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


            modalContainer.classList.remove('modal-close');
            
        
            setTimeout(()=>{
                modal.style.opacity = '1';
                modalContainer.style.visibility = 'visible';
            },900);

            createProduct(e);

            
        };


        if(e.target.matches('.btn-close')){
        
            modal.classList.add("modal-close");
        
            setTimeout(()=>{
                modal.style.opacity = '0';
                modalContainer.style.visibility = 'hidden';
            },900);
        };
    
})


window.onscroll = ()=>{
    window.scrollY >= 2000 
    ? btnScrolltop.classList.add('btn-scrolltop-on')
    : btnScrolltop.classList.remove('btn-scrolltop-on');
};






const listProducts = {}


const createProduct = (e)=>{
    const product = {
        img: e.target.dataset.img,
        title: e.target.dataset.product,
        description: e.target.dataset.description
    }
    console.log(product)

    listProducts[product.title] = product;

}


const showModal = (e)=>{
    Object.values(listProducts).forEach(item => {
    
        const clone = modal.cloneNode(true);
        clone.document.querySelector('.modal img').src = item.img;
        clone.document.querySelector('.modal .modal-texts .title').textContent = item.title;
        clone.document.querySelector('.modal .description').textContent = item.description;

        fragment.appendChild(clone);
        console.log("ShowModal esta funcionando")

    });

    createModal.appendChild(fragment);

}

console.log(listProducts)





// document.addEventListener('click', (e)=>{   

//     if(e.target.matches('.btn-product')){
//         e.preventDefault()
//         modal.classList.remove('modal-close');
        
    
//         setTimeout(()=>{
//             modal.style.opacity = '1';
//             modalContainer.style.visibility = 'visible';
//         },900);
    
//     }


//     if(e.target.matches('.btn-close')){
//         e.preventDefault();
    
//         modal.classList.add("modal-close");
    
//         setTimeout(()=>{
//             modal.style.opacity = '0';
//             modalContainer.style.visibility = 'hidden';
//         },900);
//     };

// })

