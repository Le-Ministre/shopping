const produits = [
  {
      id: 0,
      nom: "les-soulards",
      stock: 50,
      prix: 15.00,
      imageSrc: "./image/dogo.jpg", 
  },
  {
      id: 1,
      nom: "les-peules",
      stock: 90,
      prix: 14.00,
      imageSrc: "./image/kina.jpg",   
  },
  {
      id: 2,
      nom: "les-maouri",
      stock: 10,
      prix: 14.00,
      imageSrc: "./image/soul.jpg", 
  },
  {
      id: 3,
      nom: "les-soulards",
      stock: 50,
      prix: 14.00,
      imageSrc: "./image/sofiane.jpg", 
  },
  {
      id: 4,
      nom: "les-soulards",
      stock: 50,
      prix: 14.00,
      imageSrc: "./image/soulard.jpg",
  },
  {
      id: 5,
      nom: "les-soulards",
      stock: 50,
      prix: 14.00,
      imageSrc: "./image/cousmassa.jpg", 
  },
  {
      id: 6,
      nom: "les-peules",
      stock: 90,
      prix: 14.00,
      imageSrc: "./image/ismo.jpg",
  },
  {
      id: 7,
      nom: "les-soulards",
      stock: 50,
      prix: 14.00,
      imageSrc: "./image/chaibou.jpg",
  },
  {
      id: 8,
      nom: "les-maouri",
      stock: 10,
      prix: 14.00,
      imageSrc: "./image/zaradine.jpg",
  },
  {
      id: 9,
      nom: "les-maouri",
      stock: 10,
      prix: 14.00,
      imageSrc: "./image/rakia.jpg",
  },
  {
      id: 10,
      nom: "les-soulards",
      stock: 50,
      prix: 14.00,
      imageSrc: "./image/la-petite.jpg",
  },
  {
      id: 11,
      nom: "les-peules",
      stock: 90,
      prix: 14.00,
      imageSrc: "./image/abassa.jpg",
  }
]

const produitsEL = document.querySelector('.produits')
const lasection = document.querySelector('.section1')
const container = document.querySelector('.container')

const premiereImageEl = document.querySelector('.premiereImage');
const divVide = document.querySelector('.divVide');



function renduProduits() {
    lasection.innerHTML ="";
    produits.forEach((produit) =>{
      lasection.innerHTML += `
         <div>
        <div class="imagediv">
          <img src="${produit.imageSrc}" alt="" class="dogo">
          <i class="fa-solid fa-cart-shopping shopp"></i>
        </div>
        <div class="leBas">
          <span>${produit.nom}</span>
          <div>
            <i class="fa-solid fa-star star" data-value="1"></i>
            <i class="fa-solid fa-star star" data-value="1"></i>
            <i class="fa-solid fa-star star" data-value="1"></i>
            <i class="fa-solid fa-star star" data-value="1"></i>
            <i class="fa-solid fa-star star" data-value="1"></i>
          </div>
          <span class="somme">$${produit.prix}</span>
        <p class="payer" onclick="payerles(${produit.id})">
           <i class="fa-solid fa-bag-shopping "></i>
        </p>
        </div>
      </div> 
        `
    })
    // container.innerHTML += lasection
}
renduProduits()

let card = [];
 
// acheter les prouduits
const payerles = (id) =>{
    if (card.some((item) =>item.id === id)) {
       changerNombreDesUnites("plus", id)
    } else{
        const item = produits.find((produit) =>produit.id === id);
        card.push({
            ...item,
            numbreDesUnites : 1,
        });
        
    }
    ajoueProduit(card);
//    updateCard();
}
// mise a jour de la card

const miseAjour = () =>{
    ajoueProduit(card);
   //ajoueTotal();
}

// ajouter les produits dans la card
const ajoueProduit = (card) =>{
    divVide.innerHTML = '';
    card.forEach((item) =>{
        divVide.innerHTML += `
        <div class="les-achats">
        <div class="imagediv">
          <img src="${item.imageSrc}" alt="" class="dogo">
        </div>
        <div class="achats">
          <span>${item.nom}</span>
          <span class="somme">$${item.prix}</span>
          <i class="fa-solid fa-trash" style="color: #f70820;"></i>
        </div>
        <div class="unites">
          <div class="moins" onclick="changerNombreDesUnites('moins',${item.id} )">-</div>
          <div class="number">${item.numbreDesUnites}</div>
          <div class="plus" onclick="changerNombreDesUnites('plus', ${item.id})">+</div>
        </div>
      </div>
        `
    })
}

const changerNombreDesUnites = (action, id) =>{
    card = card.map((item) =>{
        let numbreDesUnites = item.numbreDesUnites;

        if (item.id === id) {
            if (action === 'moins' && numbreDesUnites > 1) {
                numbreDesUnites--;
            } else if (action === 'plus' && numbreDesUnites < item.stock) {
                numbreDesUnites++;
            }
        }
        return{
          ...item,
          numbreDesUnites,
        };
    })
    // updateCard();
    payerles();
}


// ajouter les total
const ajoueTotal = () =>{

}



















// let check = false
// let stars = document.querySelectorAll('.star');
// stars.forEach(star =>{
//     star.addEventListener('mouseover', selectStars);
//     star.addEventListener('mouseleave', unselectStars);
//     star.addEventListener('click', activeSelect);
// });
// function selectStars(e) {
//     const data = e.target;
//     const PreviousStars = previousSiblings(data);
//     if (!check) {
//         etoiles.forEach(etoile =>{
//             etoile.classList.add('hover')
//         })
//     }
// } 
// function unselectStars(e) {
//     const data = e.target;
//     const PreviousStars = previousSiblings(data);
//     if (!check) {
//         etoiles.forEach(etoile =>{
//             etoile.classList.remove('hover')
//         })
//     }
// } 

// function activeSelect(e) {
//     if (!check) {
//         document.querySelector('.note').innerHTML = 'Note ' + e.target.dataset.note;
//         check = true;
//     }
// }

// function previousSiblings(data) {
//     let values = [data]
//     while (data = data.previousSiblings){
//         if (data.nodeName === 'I') {
//             values.push(data);  
//         }
//     }
//     return values;
// }