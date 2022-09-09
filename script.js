var arr=[
    ["Samsung","Galaxy",64,15000],
    ["nokia","S730",128,22000],
    ["Xiomi","note",32,12000],
    ["motorola","G10",32,15000],
    ["apple","S12",64,25000]
]
 var len=arr.length;
 document.write("<table border='2px' cellspacing>'0'")
 document.write("<thead><tr>");
   document.write("<th>Company</th><th>model</th><th>Memory</th><th>price</th>")
for(var a=0;a<len; a++){
    document.write("<tr>");
    for(var b=0;b<arr[a].length;b++){
        document.write("<td>"+arr[a][b]+"</td>");
    }
    document.write("</tr>");
    // document.write("<br>")
}
document.write("</table>")