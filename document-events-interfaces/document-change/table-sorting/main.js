// function sortStrings(a, b) {
//     if (a.innerText > b.innerText) return 1;
//     if (a.innerText == b.innerText) return 0;
//     if (a.innerText < b.innerText) return -1;
// };

// let arrayOfNamesInTable = document.querySelectorAll(".name");
// // let arrayOfNamesInTable = [1, 0, 2];
// arrayOfNamesInTable.sort(sortStrings);

// // alert(arrayOfNamesInTable);

// // console.info(arrayOfNamesInTable);

let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((trA, trB) => 
        trA.cells[0].innerText > trB.cells[0].innerText ? 1 : -1);

table.tBodies.append(...sortedRows);

