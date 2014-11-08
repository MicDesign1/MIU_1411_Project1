var ar = ["The more that you read, the more things you will know. The more that you learn, the more places you'll go.  - Dr. Seuss", "If you love something, let it go. If you don't love something, definitely let it go. Basically just drop everything, who cares  - B.J. Novak","The way to love anything is to realize that it may be lost. - GK Chesterton", "Courage is not simply one of the virtues, but the form of every virtue at the testing point.  - C. S. Lewis", "The aim of art is to represent not the outward appearance of things, but their inward significance.  - Aristotle", "Beauty is nothing other than the promise of happiness.  - Stendhal", "Never cut what you can untie.  - Joseph Joubert"];

var iterifyArr = function (arr) {
    var cur = 0;
    arr.next = (function () { return (++cur >= this.length) ? (cur=0,this[cur]) : this[cur]; });
    arr.prev = (function () { return (--cur < 0) ? (cur=this.length-1,this[cur]) : this[cur]; });
    return arr;
};


//var ar = ["The more that you read, the more things you will know. The more that you learn, the more places you'll go.  - Dr. Seuss", "If you love something, let it go. If you don't love something, definitely let it go. Basically just drop everything, who cares  - B.J. Novak","The way to love anything is to realize that it may be lost. - GK Chesterton", "Courage is not simply one of the virtues, but the form of every virtue at the testing point.  - C. S. Lewis", "The aim of art is to represent not the outward appearance of things, but their inward significance.  - Aristotle", "Beauty is nothing other than the promise of happiness.  - Stendhal", "Never cut what you can untie.  - Joseph Joubert"];

iterifyArr(ar);