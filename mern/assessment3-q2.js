let deno = [1, 2, 5, 10, 20, 50, 100, 500, 1000, 2000];
let n = deno.length;
 
function FindMinDenominations(amount) {
        let ans = "";
        
        for (let i = n - 1; i >= 0; i--) {
            let cnt = 0;
            let priorBill = -1;
            while (amount >= deno[i]) {
                amount -= deno[i];

                if (deno[i] === priorBill) {
                    cnt++;
                } else {
                    cnt = 0;
                }

                ans += cnt + " notes of Rs " + deno[i] + "<br>";
            }
        }
  
        return ans;
}
export default FindMinDenominations;
//n = 93;
//console.log(
//"Results " + n + " : " );
//FindMinDenominations(n) ;