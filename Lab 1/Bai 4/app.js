fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(function (response){
        response.json().then(function (data){
            console.log(data);
            let array = data.data;
            let html = document.getElementById('table');
            let index =1;
            let child_html = `<table class="table table-success table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nation</th>
                        <th scope="col">Year</th>
                        <th scope="col">Population</th>
                    </tr>
                    </thead>
                    `

            array.forEach(element => {
                console.log(element);
                child_html += `<tbody>
                        <tr>
                            <td>${index++}</td>
                            <td>${element.Nation}</td>
                            <td>${element.Year}</td>
                            <td>${element.Population}</td>
                        </tr>
                        
                        </tbody>`
            })

            child_html += `</table>`;
            html.innerHTML = child_html;
        })
    })




fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let array = data;

        let html = document.getElementById('tables');

        let index = 1;

        let child_html = `<table class="table table-borderless">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Ảnh đại diện</th>
        <th scope="col">Họ tên</th>
        <th scope="col">Ngày tạo</th>
      </tr>
    </thead>`
        array.forEach(element => {
            console.log(element);
            child_html += `
      <tbody>
        <tr>
          <td>${index++}</td>
          <td><img src="${element.avatar}" alt="${element.name} class="style="width: 60px;""</td>
          <td>${element.name}</td>
          <td>${element.createdAt}</td>
        </tr>
      </tbody>`;
        });

        child_html += `</table>`;
        html.innerHTML = child_html;
    });