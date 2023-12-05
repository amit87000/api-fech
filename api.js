// function fetchProducts() {

//     fetch('https://dummyjson.com/products')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Products:', data);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }

// async function fetchProducts() {
//     try {
//         const response = await fetch('https://dummyjson.com/products');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log('Products:', data.products);

//         if (data){

//             const card = document.createElement("div");
//             card.className = "card";

//             const card1 = document.createElement("div");
//             card1.className = "card1";

//             const card2 = document.createElement("div");
//             card2.className = "card2";

//             const textSpan = document.createElement("span");
//             textSpan.className = "textSpan"

//             const pagetitle = document.createElement("title");
//             pagetitle.className = "pagetitle"

//             card.appendChild(card1);
//             card.appendChild(card2);
//             card.appendChild(textSpan);
//             card.appendChild(pagetitle);

//             console.log(data);

//         }

//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// }


async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Products:', data.products);

        if (data) {
            const container = document.querySelector('.productContainer');

            data.products.forEach(product => {
                const card = document.createElement("div");
                card.className = "card";

                const card1 = document.createElement("div");
                card1.className = "card 1";
                card1.textContent = `Product Name: ${product.name}`;

                const card2 = document.createElement("div");
                card2.className = "card2";
                card2.textContent = `Price: ${product.price}`;

                const textSpan = document.createElement("span");
                textSpan.className = "textSpan";
                textSpan.textContent = `Description: ${product.description}`;

                const pagetitle = document.createElement("h2");
                pagetitle.className = "pagetitle";
                pagetitle.textContent = product.name;

                const imgSpan = document.createElement("img");
                imgSpan.className = "imgSpan";
                imgSpan.src = `${product.images[0]}`;

                card.appendChild(card1);
                card.appendChild(card2);
                card.appendChild(textSpan);
                card.appendChild(pagetitle);
                card.appendChild(imgSpan);

                container.appendChild(card);
            });

            // const carouselItems = document.querySelectorAll('.imgSpan')
            // let currentIndex = 0;

            // function showSlide(index) {
            //     carouselItems.forEach(item => {
            //         item.style.display = 'none';
            //     })

            //     carouselItems[index].style.display = 'block';
            // }

            // function nextSlide() {
            //     currentIndex = (currentIndex + 1) % carouselItems.length;
            //     showSlide(currentIndex);
            // }

            // function previousSlide() {
            //     currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            //     showSlide(currentIndex);
            // }

            // showSlide(currentIndex);

            // document.getElementById('nextBtn').addEventListener('click', nextSlide);
            // document.getElementById('prevBtn').addEventListener('click', previousSlide);





            console.log(data);
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

