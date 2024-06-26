/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/
// `application/x-www-form-urlencoded`
// POST
/* ============================== Phase 1 ============================== */
function fetchNewProduct() {
    let url = "http://localhost:5000/products"
     fetch(url, {
        method: 'POST',
        body: { name: 'shed', description: 'tools', price: '20.99', categories: 'grocery' },

        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    ;
}

fetchNewProduct()
// Your code here



/* ============================== Phase 2 ============================== */

// Your code here



/* ============================== Phase 3 ============================== */

// Your code here
