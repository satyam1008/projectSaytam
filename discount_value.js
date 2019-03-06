"use strict";
var $ = function (id) {
    return document.getElementById(id);
}

var calculateDiscount = function(itemPrice, discount , discount$) {
    var netPrive = itemPrice;
    for (var i = 1; i <= discount$; i++ ) {
        netPrice += netPrice * discount / 100;
    }
    netPrice = netPrice.toFixed(2);
    return netPrice;
}
var processEntries = function() {
    var itemPrice = parseFloat( $("itemPrice").value );
    var discount = parseFloat( $("annual_discount").value );
    var discount$ = parseInt( $("discount$").value );
    
    if (isNaN(itemPrice) || isNaN(discount) || isNaN(discount$)) {
        alert("One or more entries is invalid");
    }
    else {
        $("DCalc").value =
            calculateFV(itemPrice, discount, discount$);
    }
}
window.onload = function () {
    $("calculate").onclick = processEntries;
    $("itemPrice").focus();
}
