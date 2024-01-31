// https://qiita.com/sueasen/items/2a39e709ffac6ff041f5

var searched = false;
var searching = -1;
var showing_detail= false;

const num_first_data = 4
const max_strlen_title = 10
const max_strlen_text = 180 // em

var draggyboxes = document.querySelectorAll("div.draggy");
draggyboxes = Array.prototype.slice.call(draggyboxes);
var destbox = document.querySelector("div.droppy");

var backicon = document.querySelector("#backicon");
var backicon_img = backicon.querySelector('.backimg');
backicon.addEventListener("click", BackToPrevious);
backicon_img.hidden = true;

var detailpane = document.querySelector("#details");
var detailpane_title = detailpane.querySelector('#title');
var detailpane_text = detailpane.querySelector('#text');
var detailpane_img = detailpane.querySelector('.thumbnail');
var detailpane_link = detailpane.querySelector('#link');
var detailpane_ref = detailpane.querySelector('#reference');
var detailpane_date = detailpane.querySelector('#date');
var detailpane_rel = detailpane.querySelector('#relation');
detailpane.addEventListener("click", HideDetailPane);
detailpane.hidden = true;

var hidepane = document.querySelector("#hidebottompane");

var bef_imgs = new Array(draggyboxes.length);
var bef_txts = new Array(draggyboxes.length);

// drag
for (let i = 0; i < num_first_data; i++){
    draggyboxes[i].draggable = true;
    draggyboxes[i].addEventListener("dragstart", onDragStart);
   
    if (data[i]["title"].length > max_strlen_title){
        draggyboxes[i].querySelector('.text').innerHTML = data[i]["title"].substring(0,max_strlen_title).concat("...")
    }else{
        draggyboxes[i].querySelector('.text').innerHTML = data[i]["title"]
    }
    draggyboxes[i].querySelector('.thumbnail').src = data[i]["image"]
}

for (let i = 0; i < draggyboxes.length; i++){
    draggyboxes[i].addEventListener("click", DisplayDetailPane);
}

// drop
document.querySelectorAll("div.droppy").forEach((element) => {
    element.addEventListener("drop", onDrop);
    element.addEventListener("dragover", onDragover);
    element.addEventListener("dragenter", onDragenter);
    element.addEventListener("dragleave", onDragleave);
});

function onDragStart(event) {
    event.dataTransfer.setData("id", event.currentTarget.id);
}

function onDrop(event) {
    if (!searched && !showing_detail){
        event.currentTarget.classList.remove("dragging");
        let origin = document.getElementById(event.dataTransfer.getData("id"));
        let dest = event.currentTarget;

        if (dest == destbox){
            let text_query = origin.querySelector('.text');
            let thumbnail_query = origin.querySelector('.thumbnail');

            let thumbnail_dest = dest.querySelector('.thumbnail');
            thumbnail_dest.src = origin.querySelector('.thumbnail').src;

            let drop_index = draggyboxes.indexOf(origin)

            for (let i = 0; i < draggyboxes.length; i++){

                if (draggyboxes[i].querySelector('.text')){
                    bef_txts[i] = draggyboxes[i].querySelector('.text').innerHTML
                    if (data[drop_index]["results"][i]["title"].length > max_strlen_title){
                        draggyboxes[i].querySelector('.text').innerHTML = data[drop_index]["results"][i]["title"].substring(0,max_strlen_title).concat("...")
                    }else{
                        draggyboxes[i].querySelector('.text').innerHTML = data[drop_index]["results"][i]["title"]
                    }
                }else{
                    bef_txts[i] = ""
                }
                if (draggyboxes[i].querySelector('.thumbnail')){
                    bef_imgs[i] = draggyboxes[i].querySelector('.thumbnail').src
                    draggyboxes[i].querySelector('.thumbnail').src = data[drop_index]["results"][i]["image"]
                }else{
                    bef_imgs[i] = ""
                }
            }
            searched = true;
            hidepane.hidden = true;
            searching = drop_index;
            backicon_img.hidden = false;
        }
    }
}

function onDragenter(event) {
    event.currentTarget.classList.toggle("dragging");
}

function onDragleave(event) {
    event.currentTarget.classList.toggle("dragging");
}

function onDragover(event) {
    event.preventDefault();
}

function BackToPrevious(event) {
    if (!backicon_img.hidden && !showing_detail){
        destbox.querySelector('.thumbnail').src = "dragdrop.png";

        for (let i = 0; i < draggyboxes.length; i++){
            if (draggyboxes[i].querySelector('.text')){
                draggyboxes[i].querySelector('.text').innerHTML = bef_txts[i]
            }
            if (draggyboxes[i].querySelector('.thumbnail')){
                draggyboxes[i].querySelector('.thumbnail').src = bef_imgs[i]
            }
            bef_txts[i] = ""
            bef_imgs[i] = ""
        }
        searched = false
        hidepane.hidden = false
        searching = -1
        backicon_img.hidden = true

    };
}

function DisplayDetailPane(event) {

    if (!showing_detail){

        let origin = event.target;
        let clicked_index = draggyboxes.indexOf(origin)

        if (searching == -1){
            if (clicked_index in data){
                detailpane_title.innerHTML = data[clicked_index]["title"]
                //detailpane_text.innerHTML = data[clicked_index]["text"]
                detailpane_img.src = data[clicked_index]["image"]
                detailpane_link.href = data[clicked_index]["link"]
                detailpane_ref.innerHTML = data[clicked_index]["reference"]
                detailpane_date.innerHTML = data[clicked_index]["date"]
                detailpane_rel.innerHTML = ""

                if (data[clicked_index]["text"].length > max_strlen_title){
                    detailpane_text.innerHTML = data[clicked_index]["text"].substring(0,max_strlen_text).concat("...")
                }else{
                    detailpane_text.innerHTML = data[clicked_index]["text"]
                }
                
                detailpane.hidden = false;
                showing_detail = true;
            }

        }else{
            if (clicked_index in data[searching]["results"]){
                detailpane_title.innerHTML = data[searching]["results"][clicked_index]["title"]
                //detailpane_text.innerHTML = data[searching]["results"][clicked_index]["text"]
                detailpane_img.src = data[searching]["results"][clicked_index]["image"]
                detailpane_link.href = data[searching]["results"][clicked_index]["link"]
                detailpane_ref.innerHTML = data[searching]["results"][clicked_index]["reference"]
                detailpane_date.innerHTML = data[searching]["results"][clicked_index]["date"]
                detailpane_rel.innerHTML = data[searching]["results"][clicked_index]["relation"]
                
                if (data[searching]["results"][clicked_index]["text"].length > max_strlen_title){
                    detailpane_text.innerHTML = data[searching]["results"][clicked_index]["text"].substring(0,max_strlen_text).concat("...")
                }else{
                    detailpane_text.innerHTML = data[searching]["results"][clicked_index]["text"]
                }

                detailpane.hidden = false;
                showing_detail = true;
            }
        }
    }
}

function HideDetailPane(event) {
    
    if (showing_detail){
        detailpane.hidden = true;
        showing_detail = false;
    }

}