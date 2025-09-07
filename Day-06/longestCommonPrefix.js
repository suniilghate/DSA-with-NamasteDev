let strs = ["aaa","aa","aaa"];
function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) return "";

    // Start with the first string as the prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        // Compare prefix with current string character by character
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        // Cut down the prefix to the matched part
        prefix = prefix.substring(0, j);

        //If at any point prefix becomes empty, no need to continue
        if (prefix === "") return "";
    }

    return prefix;
}  

console.log(longestCommonPrefix(strs));