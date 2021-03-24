name_of_the_student=[];
function submit(){
var display_array=[];
for(var j=1; j<=4;j++){
    var name_student= document.getElementById("name_of_the_student_"+j).value;
    name_of_the_student.push(name_student);
}
console.log(name_of_the_student);
var length_array=name_of_the_student.length;
for(var k=0; k<length_array; k++){
    display_array.push("<h4>NAME-"+name_of_the_student[k]+"</h4>");
}
document.getElementById("display_name_with_commas").innerHTML=display_array
var revmove_comma=display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=revmove_comma;
}