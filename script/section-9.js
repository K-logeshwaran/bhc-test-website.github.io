let category =document.getElementById("category");
console.log(category.value);
let college = document.getElementById("college")
let school = document.getElementById("school")
let vary = document.getElementById("vary");
removeNode(category.value)
category.onchange = function(e){
    removeNode(e.target.value);
}



function removeNode(category){
    if(category==="school"){
       college.remove() 
       vary.append(school)
    }else{
        school.remove();
        vary.append(college)
    }
}