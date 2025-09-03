/**
 *      Draw a pattern as follows
 *      1
 *      1 0
 *      1 0 1
 *      1 0 1 0
 *      1 0 1 0 1
 */

let n = 5;

for(let i = 0; i < n; i++) {
    let row = "";
    let swtich = 1;
    for(let j = 0; j <= i; j++) {
        row = row + " " + swtich;
        
        if(swtich == 1)
            swtich = 0;
        else
            swtich = 1;
    }
    console.log(row);
}