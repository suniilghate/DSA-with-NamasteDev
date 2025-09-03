/**
 *      Draw the follow pattern
 *      1
        0 1
        0 1 0
        1 0 1 0
        1 0 1 0 1
 */

let n = 5;
let swtich = 1;
for(let i = 0; i < n; i++) {
    let row = "";
    
    for(let j = 0; j < i + 1; j++) {
        row = row + " " + swtich;

        if(swtich == 1)
            swtich = 0;
        else
            swtich = 1;
    }
    console.log(row);
}