//Generate a Json Object from a Table
function tableToJson() {
    var table = document.getElementById('rotaTable');
    //Iterate through cells in table
    for (var i = 0; i < table.length; i++) {
        for (var j = 0; j < table.rows[0].length; j++); {
            if (i == 0 && j != 0) {
                
            }
        }
    }
}
function testJsonPost()
{
    var text = {
        "Mar 17th": {
            "Preaching": "Ian Stanton",
            "Theme": "Prodigal Son",
            "Special Events": "Christmas",
            "Sun AM Co-ordinator": "Tom G",
            "Kid's Slot": "Lorraine",
            "Bible Reading": "Rachel",
            "Prayers for Others": "Ann Morrison",
            "Signs and Welcome Desk": "Paul B",
            "Collection": "Edwin",
            "JAM": "Colm & Louise",
            "Creche": "Lorraine & Colm",
            "Prayer Ministry": "Breda & Jim",
            "Projector & Sound": "Tim Mc",
            "Tea & Coffee": "Alison & Phil",
            "Sat Set-Up": "Keith M, Tim Mc, Conor M"
        }
    }
    writeRotaData(text);
}
function postJson(rotaData) {
    request = new XMLHttpRequest();
    var url = "rota.json";
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var json = JSON.parse(request.responseText);
            }
    }
    request.send(rotaData);
}

//Generate a new row in the table
function newRow() {
    var table = document.getElementById('rotaTable');
    var row = table.insertRow(table.rows.length);
    for (i = 0; i < table.rows[0].cells.length; i++) {

        var td = row.insertCell(table.rows[i].length);
        if (i == 0) {
            columnOneStyle(td);
        }
        allStyle(td);
    }

}
//Delete a Row In the Table
function delRow() {
    var table = document.getElementById('rotaTable');
    table.deleteRow(table.rows.length - 1);
}
//Generate a new Column in the table.
function newColumn() {
    var table = document.getElementById('rotaTable');
    for (var i = 0; i < table.rows.length; i++) {
        var td = table.rows[i].insertCell(table.rows[0].length);
        if (i == 0) {
            rowOneStyle(td);
        }
        allStyle(td);
    }
}
//Delete a Column In The Table
function delColumn() {
    var table = document.getElementById('rotaTable');
    var cellIndex = table.rows[0].cells.length - 1;
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(cellIndex);
    }
}
function buildTable(rotaData) {
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement('table');
    table.id = 'rotaTable'
    table.setAttribute('border', 'solid', 'black', 1);
    var tableBody = document.createElement('tbody');
    var numOfRows = Object.keys(Object.values(rotaData)[0]).length + 1;
    var numOfCols = Object.values(rotaData).length + 1;
    for (var i = 0; i < numOfRows; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < numOfCols; j++) {
            var td = document.createElement('td');
            //Top left cell empty
            if (i == 0 && j == 0) {
                var text = " ";
                rowOneStyle(td);
            }
            //Top row, dates
            else if (i == 0) {
                var text = Object.keys(rotaData)[j - 1];
                rowOneStyle(td);
                //First Column:  Themes
            } else if (j == 0 && i != 0) {
                var text = Object.keys(Object.values(rotaData)[j])[i - 1];
                columnOneStyle(td);
            } else {
                var text = Object.values(Object.values(rotaData)[j - 1])[i - 1];
            }
            if (i%2==0 && i!=0 && j!=0)
            {
                secondRowStyle(td);
            }
            allStyle(td);
            td.appendChild(document.createTextNode(text));
            tr.appendChild(td);
            var text = " ";
        }
        tableBody.appendChild(tr);
    }
    table.appendChild(tableBody);
    body.appendChild(table)

}

//Gets the Json File and runs the Build Table function with it
function buildTableFromJson() {
    var requestUrl = ("rota.json");
    var request = new XMLHttpRequest();
    request.open('GET', requestUrl);
    request.setRequestHeader('Cache-Control', 'no-cache');

    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var rotaData = request.response;
        buildTable(rotaData);
    }
}
function clearTable()
{
    var table = document.getElementById('rotaTable');
    for (var i = 0; i < table.rows.length; i++)
    {
        for (var j=0; j < table.rows[0].cells.length; j++)
        {
            var target = table.rows[i].cells[j];
            target.innerHTML = "";
        }
    }
    
}
function clearDates()
{
    var table = document.getElementById('rotaTable');
    
         for (var j=0; j < table.rows[0].cells.length; j++)
        {
            var target = table.rows[0].cells[j];
            target.innerHTML = "";
        }
    }
function clearNames()
{
    var table = document.getElementById('rotaTable');
    for (var i = 1; i < table.rows.length; i++)
    {
        for (var j=1; j < table.rows[0].cells.length; j++)
        {
            var target = table.rows[i].cells[j];
            target.innerHTML = "";
        }
    }  
}
//Style Functions
{
    function rowOneStyle(td) {
        td.style.backgroundColor = "#003c81";
        td.style.color = 'white';
    }
    function columnOneStyle(td) {
        td.style.backgroundColor = "#720000";
        td.style.color = 'white';
    }
    function allStyle(td) {
        td.height = 'auto';
        td.width = '100px';
        td.style.borderSpacing = '0';
        td.style.margin = '0'
        td.style.padding = '20px 0px';
        td.style.borderCollapse = 'collapse';
        td.setAttribute('contenteditable', 'true');
        td.style.textAlign = 'center';
    }
    function secondRowStyle(td)
    {
        td.style.backgroundColor = "#c9c9c9"
    }
}


//Firebase Functions