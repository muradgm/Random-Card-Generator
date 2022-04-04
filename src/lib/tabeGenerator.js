export default function addTable() {
    //   var myTableDiv = document.getElementById("myDynamicTable");
    const data = []
    let randomName = ''
    let randomCity = ''
    let names = ['Michael', 'John', 'Jay', 'Bob', 'Ronny', 'James'];
    let cities = ['Dubai', 'London', 'New York', 'Berlin', 'Paris', 'Istanbul']

    for (let i = 0; i < 25; i++) {
        let tr = document.createElement('TR');
      tableBody.append(tr);
      
        for (let j = 0; j < 25; j++) {
            let td = document.createElement('TD');
            td.width = '75';
            td.append(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
            data.push({
                id: i,
                name: randomName,
                city: randomCity,
                email: randomEmail
            })
        }
    }

    myTableDiv.append(table);
}
console.log(addTable())