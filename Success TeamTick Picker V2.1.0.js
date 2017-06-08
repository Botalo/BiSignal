// Input variable
var macro, display, sinyal, hi=0, lo=0, max=10, j=0, spot=[0];
display  = "SUCCESS TEAM - TICK PICKER\n";
display += "SUCESS TEAM ROBOT DEPARTMENT";
display += "\nCollect tick  ∆"+hi+" ▼"+lo;
iimDisplay(display);
var strong = Number(prompt("Rate Strong (1-10)",9));
var medium = Number(prompt("Rate Medium (1-10)",7));

iimDisplay(display);
macro  = "CODE:";
macro += "URL GOTO=https://www.binary.com/en/trading.html?currency=USD&market=volidx&underlying=R_100&formname=risefall&date_start=now&duration_amount=1&duration_units=m&expiry_type=duration&amount=10&amount_type=payout";
iimPlay(macro);

// Loop display spot
for (var i=0;; i++) {
macro  = "CODE:";
macro += "WAIT SECONDS=1.8\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=ID:spot extract=txt";
iimPlay(macro);

// Ekstrak spot
spot[i]  = iimGetLastExtract(1);
if (i>0 && i<=10) {
if (spot[i] > spot [i-1]) {hi+=1}
if (spot[i] < spot [i-1]) {lo+=1}
display  = "SUCCESS TEAM - TICK PICKER\n";
display += "Robot Department";
display += "\nCollect tick  ∆"+hi+" ▼"+lo;
iimDisplay(display);
}
if (i>2) {
if (spot[i] == spot [i-1] && spot[i-1] == spot [i-2]) {iimPlay("CODE:TAG POS=1 TYPE=BUTTON FORM=NAME:form0 ATTR=ID:bet_calculate")}
}
if(i>=10) {
if (spot[i] > spot [i-1]) {
if (hi!==10 && lo!==0) {
hi+=1;
lo-=1;}}
if (spot[i] < spot [i-1]) {
if (hi!==0 && lo!==10) {
hi-=1;
lo+=1;}}
if (hi<medium || lo<medium) {sinyal = "NO SIGNAL"}
if (hi>=medium) {sinyal = "Medium RISE"}
if (lo>=medium) {sinyal = "Medium FALL"}
if (hi>=strong) {sinyal = "STRONG RISE >>"}
if (lo>=strong) {sinyal = "STRONG FALL >>"}
display  = "SUCCESS TEAM - TICK PICKER\n";
display += "Spot: "+spot[i]+"  ∆"+hi+" ▼"+lo;
display += "\n"+sinyal;
iimDisplay(display);
}
} 
