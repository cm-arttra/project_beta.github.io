$(function() {

    var div = $('#imagepane');
    var width_all = div.width();
    div.css('height', width_all);

    var mgn_ratio = 0.00
    var mgn = width_all * mgn_ratio / 2
    var block_size = width_all * (1-mgn_ratio*2) / 3 
    var curr_pos = div.position()

    var bottom_mgn = width_all * 0.02

    var div = $('#imagebox1');
    div.css('width', block_size*2);
    div.css('height', block_size);
    div.css('top', curr_pos.top+mgn);
    div.css('left', curr_pos.left+mgn);

    var div = $('#imagebox2');
    div.css('width', block_size);
    div.css('height', block_size*2);
    div.css('top', curr_pos.top+mgn);
    div.css('left', curr_pos.left+mgn+block_size*2+mgn*2);

    var div = $('#imagebox3');
    div.css('width', block_size);
    div.css('height', block_size*2);
    div.css('top', curr_pos.top+mgn+block_size+mgn);
    div.css('left', curr_pos.left+mgn);

    var div = $('#imagebox4');
    div.css('width', block_size*2);
    div.css('height', block_size);
    div.css('top', curr_pos.top+mgn+block_size*2+mgn*2);
    div.css('left', curr_pos.left+mgn+block_size+mgn);

    var div = $('#imagebox0');
    div.css('width', block_size);
    div.css('height', block_size);
    div.css('top', curr_pos.top+mgn+block_size+mgn);
    div.css('left', curr_pos.left+mgn+block_size+mgn);

    var div = $('#backicon');
    div.css('width', block_size/4);
    div.css('height', block_size/4);
    div.css('top', curr_pos.top+mgn+block_size+mgn);
    div.css('left', curr_pos.left+mgn+block_size+mgn);

    var div = $('#details');
    div.css('width', width_all);
    //div.css('height', width_all+bottom_mgn+block_size);
    div.css('height', "90%");
    div.css('top', curr_pos.top+mgn);
    div.css('left', curr_pos.left+mgn);

    var div = $('#imagebox5');
    div.css('width', block_size);
    div.css('height', block_size);
    div.css('top', curr_pos.top+mgn+block_size*3+mgn*3+bottom_mgn);
    div.css('left', curr_pos.left+mgn);

    var div = $('#imagebox6');
    div.css('width', block_size);
    div.css('height', block_size);
    div.css('top', curr_pos.top+mgn+block_size*3+mgn*3+bottom_mgn);
    div.css('left', curr_pos.left+mgn+block_size+mgn);

    var div = $('#imagebox7');
    div.css('width', block_size);
    div.css('height', block_size);
    div.css('top', curr_pos.top+mgn+block_size*3+mgn*3+bottom_mgn);
    div.css('left', curr_pos.left+mgn+block_size*2+mgn*2);

    var div = $('#hidebottompane');
    div.css('width', block_size*3+4);
    div.css('height', block_size+4);
    div.css('top', curr_pos.top+mgn+block_size*3+mgn*3+bottom_mgn-2);
    div.css('left', curr_pos.left+mgn-2);


});
