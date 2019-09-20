let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((trA, trB) => 
        trA.cells[0].innerText > trB.cells[0].innerText ? 1 : -1);

table.tBodies.append(...sortedRows);

