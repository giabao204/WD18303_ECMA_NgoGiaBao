function generateTableHeader(headerTitles){
    if (!headerTitles || headerTitles.length === 0){
        return "";
    }
    let html = ``;

    headerTitles.forEach(element => {
        html += `<th>${element}</th>`;
        // console.log(element);
    });
    return `<thead><tr>${html}</tr></thead>`;
}

function generateTableRowStudent(object) {
    if (!object || object.length === 0) {
        return "";
    }
    return `<tr>
            <td>${object.id}</td>
            <td>${object.name}</td>
            <td><img src="${object.avatar}" height="70"></td>
            <td>${object.createdAt}</td>
        </tr>`;
}

function generateTable(headers,data){
    if (!headers || !data || headers.length === 0 || data.length === 0) {
        return "";
    }
    let headerRow = generateTableHeader(headers);
    let html = '';
    data.forEach(element => {
        html += generateTableRowStudent(element)
    });
    return` <table class="table table-borderless">${headerRow}<tbody>${html}</tbody></table>`;
}

// document.write(generateTable(headers,list))
// let app = document.getElementById("app");
// app.innerHTML = generateTable(list);

fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
.then(function(response){
    response.json().then(function(data){
        const headers = ["*","Họ và tên", "Ảnh Đại Diện", "Ngày tạo"]
        const tableHtml =generateTable(headers, data);
        let app = document.getElementById("app");
        app.innerHTML= tableHtml;
    })
})
.catch(function(err){

});