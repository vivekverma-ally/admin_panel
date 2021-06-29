var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

// let dataList = [];

// async function getapi(url) {

//     // Storing response
//     const response = await fetch(url);

//     // Storing data in form of JSON
//     var data = await response.json();
//     // if (response) {
//     //     hideloader();
//     // }
//     // console.log(typeof data)
//     console.log(data);
// }

fetch(url)
    .then(res => res.json())
    .then(data => dataList = data)
    .then(() => {
        var table = document.getElementById("table-data").querySelector("table");
        var tableSize = table.querySelector("tbody").querySelectorAll("tr").length;
        for (let i = 0; i < dataList.length && i < tableSize; i++) {
            var item = dataList[i];
            table.rows[i].cells[0].innerHTML = item.id;
            table.rows[i].cells[1].innerHTML = item.firstName;
            table.rows[i].cells[2].innerHTML = item.lastName;
            table.rows[i].cells[3].innerHTML = item.email;
            table.rows[i].cells[4].innerHTML = item.phone;
        }
        var active = 2;
        // document.getElementById("info-content").innerHTML = ` <div><b>User selected:</b>${table.rows[active].cells[1].innerHTML} ${table.rows[active].cells[2].innerHTML}</div>
        // <div>
        //   <b>Description: </b>
        //   <textarea cols="50" rows="5" readonly>
        //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
        //           </textarea
        //   >
        // </div>
        // <div><b>Address:</b> 6480 Nec Ct</div>
        // <div><b>City:</b> Dinwiddie</div>
        // <div><b>State:</b> NV</div>
        // <div><b>Zip:</b> 91295</div>`;




        table.querySelector("tbody").querySelectorAll("tr").forEach((row, i) => {
            row.addEventListener("click", () => {
                document.getElementById("info-content").style.display = "block";
                table.rows[active].classList.remove("active");
                active = i;
                row.classList.add("active");

                var render = ` <div><b>User selected:</b>${row.cells[1].innerHTML} ${row.cells[2].innerHTML}</div>
                <div>
                  <b>Description: </b>
                  <textarea cols="50" rows="5" readonly>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                          </textarea
                  >
                </div>
                <div><b>Address:</b> 6480 Nec Ct</div>
                <div><b>City:</b> Dinwiddie</div>
                <div><b>State:</b> NV</div>
                <div><b>Zip:</b> 91295</div>`
                document.getElementById("info-content").innerHTML = render;
            })
        });
 

    });

function search(e) {
    let searched = document.getElementById("search-box").value.trim();
    if (searched !== "") {
        let text = document.getElementById("table-data").innerHTML;
        let re = new RegExp(searched, "g"); // search for all instances
        let newText = text.replace(re, `<mark>${searched}</mark>`);
        document.getElementById("table-data").innerHTML = newText;
    }
}


    // .then(() => dataList.forEach(itm => {


    //     var render = `<tr class="data-row">
    //     <td class="column1">${itm.id}</td>
    //     <td class="column2">${itm.firstName}</td>
    //     <td class="column3">${itm.lastName}</td>
    //     <td class="column4">${itm.email}</td>
    //     <td class="column5">${itm.phone}</td>
    //   </tr>`
    //     var rows = document.getElementById("table-data").querySelector("table").querySelectorAll("tbody");
    //     row.innerHTML += render;
    //     row.addEventListener('click', () => {
    //         var details = `<div><b>User selected:</b>${itm.firstName} ${itm.lastName}</div>
    //         <div>
    //           <b>Description: </b>
    //           <textarea cols="50" rows="5" readonly>
    //                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
    //                   </textarea
    //           >
    //         </div>
    //         <div><b>Address:</b> 6480 Nec Ct</div>
    //         <div><b>City:</b> Dinwiddie</div>
    //         <div><b>State:</b> NV</div>
    //         <div><b>Zip:</b> 91295</div>`;
    //         document.getElementById("info-content").innerHTML += details;
    //     });

    // }));
