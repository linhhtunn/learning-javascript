fetch ("https://jsonplaceholder.typicode.com/photos")
    .then( async function(response){
        const data = await response.json();

        
        var firstThree = data.slice(0, 3)
        console.log(firstThree);
        
    var container = document.getElementById("listPhoto")
    var html = ""

    firstThree.forEach(function(photo){
      html += `
        <div class="card">
          <img src="${ "/ex2/assets/img/abc.png"}">
          <div class="card-content">
            <h4>${photo.title}</h4>
          </div>
        </div>
      `
    })

    container.innerHTML = html
    })
    .catch(function(err){
        console.error(err)
    })