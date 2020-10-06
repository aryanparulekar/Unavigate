const collegeData = [
      {
        name: "UNC",
        student: "Bob Herrald",
        year: "Sophomore",
      },
      {
        name: "UCLA",
        student: "John Herrald",
        year: "Junior",
      },
];








function college(collegename){
  document.getElementById("ma").innerHTML=`
  ${collegeData.map(function(college){
    document.getElementById('UNC').style.opacity = 0;  
    document.getElementById('UCLA').style.opacity = 0;  
    if (collegename == college.name) {
        return `
        <link rel="stylesheet" href="/css/bootstrap.min.css">
  
        <div class = "col-sm-12">
        <h2> <br> </br> </h2>
        </div>

          <div class = "col-sm-12">
            <h2> ${college.name} ${college.student} </h2>
          </div>
  

  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="/Pages/Colleges/Colleges.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        `
      }

      }
    )}
    `;
    
    // var  div = document.getElementById('button');
    // div.parentNode.removeChild(div);
}