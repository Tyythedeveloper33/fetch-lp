/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/
// `application/x-www-form-urlencoded`
// POST
/* ============================== Phase 1 ============================== */

fetch('/products', {
    method: "POST",
    headers: {
        "Content-Type" : "application/x-www-form-urlencoded"
    },
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
})

// Your code here



/* ============================== Phase 2 ============================== */
let res = fetch('/products', {
    method: "POST",
    headers: {
        "Content-Type" : "application/x-www-form-urlencoded"
    },
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
})
 console.log('res status', res.status)
//  console.log('success boolean', res.ok)
 console.log('content-type(header)',res.headers.get('Content-Type'))
 console.log("Response Body", await res.text())
 console.log("Response url",  res.url)
// Your code here



/* ============================== Phase 3 ============================== */

// Your code here
