
let length = prompt("nhap chieu dai") ;
let width = prompt("nhap chieu rong");
let c = prompt("nhap ki tu can in");
let a= "";
let html ="";
for(let i=1;i<=length;i++){
    a += c
}
let b = "";
for(let i=1;i<=width;i++){
    b += c;
for(let i=1;i<=(2*length-4);i++){
    b += "\xa0";
}
b += c + '<br>';
}

html = a + '<br>' +  b + a;
document.write(html);