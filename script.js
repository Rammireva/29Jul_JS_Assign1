var clk = document.getElementById('btn');
clk.onclick = function(){
    var cur_class = this.className;
    if(cur_class === 'true') {
        clk.className = 'false';
        clk.innerHTML = 'UNLIKE';
    }
    else {
        clk.className = 'true';
        clk.innerHTML = 'LIKE';
    }
}

