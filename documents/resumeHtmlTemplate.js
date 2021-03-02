
const generateExperianceHtml = (exps) => {
    let experience = '';
    exps.forEach(exp => {
        experience += `
            <div class="col-lg-8 mx-auto">
                <p class="lead"><b>${exp.organisation}, ${exp.position}</b> (${exp.duration})</p>
                <p class="mt-0">${exp.description}</p>
            </div>`
    });
    return experience;
}

const generateEducationHtml = (edus) => {
    let education = '';
    edus.forEach(edu => {
        education += `
        <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${edu.school}</b> (${edu.qualification}, ${edu.year})</p>
            <p class="mt-0">${edu.description}</p>
        </div>`
    });
    return education;
}

const generateSkillsHtml = (skills) => {
  let _skills = '';
  skills.forEach(skill => {
    _skills += `
      <div class="col-lg-8 row mx-auto">
        <p class="lead"> ${skill}</p>
      </div>`
    });
    return _skills;
}



module.exports = ({personalInfo, experience, education }) => {
    return `
      <!doctype html>
      <html>
          <head>
              <!-- Font Awesome -->
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
              <!-- Bootstrap core CSS -->
              <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
              <!-- Material Design Bootstrap -->
              <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
              <style>
                html{
                    zoom: 0.55;
                }    
                .rule{
                  border-bottom: 1px solid black;
                  width:80%;
                }
                .mobile{
                  margin-top:-10px;
                }
                .email{
                  margin-bottom: 0;    
                }
                body{
                  font-family: 'Garamond';
                }
              </style>
          </head>
          <body>
          <div class="col-lg-8 mx-auto">
          <br/><br/>
          <div class="row text-center">
              <div class="col-lg-6">
                  <h1><b>${personalInfo.name}</b></h1>
                  <h2>${personalInfo.title}</h2>
                  <p class="lead email"><strong>Email:</strong> ${personalInfo.email}</p>
                  <p class="lead"><strong>Contact:</strong> (+91)${personalInfo.phone}</p>
              </div>    
          </div>
          <hr/>
          <div class="col-lg-8 mx-auto bg-light">
                <h3><b>Skills</b></h3>
          </div>
          ${generateSkillsHtml(personalInfo.skills)}
          <div class="col-lg-8 mx-auto bg-light">
                <h3><b>Experience</b></h3>
          </div>
          ${generateExperianceHtml(experience)}      
          
          <div class="col-lg-8 mx-auto bg-light">
                <h3><b>Education</b></h3>
          </div>
         ${generateEducationHtml(education)}

          
              <!-- JQuery -->
              <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
              <!-- Bootstrap tooltips -->
              <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
              <!-- Bootstrap core JavaScript -->
              <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
              <!-- MDB core JavaScript -->
              <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
          </body>
      </html> 
    `;
  }
  