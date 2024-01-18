let hot = data.filter(function(item){
    return item.hotdeal==1;
});


const cate_hot = document.querySelector("#dongho");
// Initialize an empty string to store the HTML
let productHTML = '';

hot.forEach(function(item) {
    productHTML += `
        <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center">
                <div class="position-relative mb-3">
                    <div class="badge text-white bg-"></div>
                    <a class="d-block" href="detail.html">
                        <img class="img-fluid w-100" src="img/${item.image}" alt="...">
                    </a>
                    <div class="product-overlay">
                        <ul class="mb-0 list-inline">
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark" href="#!"><i class="far fa-heart"></i></a></li>
                            <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li class="list-inline-item me-0"><a class="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i class="fas fa-expand"></i></a></li>
                        </ul>
                    </div>
                </div>
                <h6><a class="reset-anchor" href="detail.html">${item.name}</a></h6>
                <p class="small text-muted">${item.price}$</p>
            </div>
        </div>
    `;
});

// Wrap the generated productHTML in a container with the class "row"
cate_hot.innerHTML = `<div class="row">${productHTML}</div>`;
