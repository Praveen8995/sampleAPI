const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://boxigo.in/sampleAPI.php', true)
request.onload = function() {
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.Customer_Estimate_Flow.forEach(customer => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      // h1.textContent = customer.estimate_id
      const button = document.createElement('button',"width=300,height=200")
      button.setAttribute('class','button')
      const p = document.createElement('p')
      // p.textContent = customer.city_type
      // p.textContent = customer.items.rooms.living_room.center_table
      button.innerHTML = 'view details'
      button.onclick = function(){
        alert(`living room\ncenter table : ${customer.items.rooms.living_room.center_table}\ncomputer_table : ${customer.items.rooms.living_room.computer_table} `);
        return false;
      };
      // button = customer.items.rooms.living_room.center_table
      card.innerHTML = '<i class="fa fa-home" style="color:grey;font-size:30px;margin-top:25px;"></i>' + '<a href="#" style="position:relative;top:-30px;left:-25px;">'+ customer.estimate_id + '</a>' + '<span style="position:relative;left:-50px; top:-1px;">'+ customer.select_city + '</span>'+ '<span style="position:relative;left:-145px; top:20px;"> Order date:' + customer.order_date + '</span>' 
                        + '<span style="position:relative;left:50px; top:-5px;color:grey;">' + customer.moving_from + '</span>' + '<span style="position:relative;left:100px; top:-20px;color:grey;">' + customer.moving_on + '</span>'+'<span style="position:relative;left:150px; top:-5px;">' + customer.moving_to + '</span>' + '<span style="position:relative;left:190px; top:25px;">' + customer.custom_status + '</span>';

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
      card.appendChild(button)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()



