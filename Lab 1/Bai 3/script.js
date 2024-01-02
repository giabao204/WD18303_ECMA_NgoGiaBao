fetch("https://api.publicapis.org/entries")
    .then(function (response){
        response.json().then(function (data){
            console.log(data.entries);
            let array = data.entries;

            let html = document.getElementById('ii');

            let child_html = `<ul><li><strong>COUNT: </strong>${data.count}</li>`

            array.forEach(element => {
                console.log(element.Description);
                child_html += `<li> ${element.Description} </li>`;
            });

            child_html += '</ul>';
            html.innerHTML = child_html;
        })
    })


// Object Literal

