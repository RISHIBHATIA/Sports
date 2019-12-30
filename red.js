// Click for the Click Event to Kick Off Api 
document.getElementById('hello').addEventListener('click', getExternal);
// Click to get odds 
document.getElementById('Get_Odds').addEventListener('click', Get_Odds);


//Get API Data 
function getExternal(){
  fetch('https://api.the-odds-api.com/v3/odds/?sport=UPCOMING&region=us&mkt=h2h&apiKey=3bc48c850a3607c37b6933135b9c4b82') 
  .then(function(res){
    return res.json();
  })
  .then(function(data){
   console.log(data);
   let output ='';
   data.data.forEach(function(sport){
     console.log(sport.sport_key);
     output += `<a hoverable>${sport.sport_key}</a>
                <p>${sport.teams}<p>
                <h1>${sport.sites}</h1>
     `;
    });
  
    document.getElementById('output').innerHTML = output; 
  })
     .catch(function(err){
      console.log(err);
  });
}




// Clear Tasks
function clearTasks() {
    // taskList.innerHTML = '';
  
    // Faster
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  
    // https://jsperf.com/innerhtml-vs-removechild
  
    // Clear from LS
    clearTasksFromLocalStorage();
  }
  
  // Clear Tasks from LS
  function clearTasksFromLocalStorage() {
    localStorage.clear();
  }
  
  // Filter Tasks
  function filterTasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  }


  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });



  var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 0,
     'max': 100
   },
   format: wNumb({
     decimals: 0
   })
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel-slider');
     M.Carousel.init(big, options);
  });

  // drop down 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });