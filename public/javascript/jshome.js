var dataRides = []

updateRides()

function updateRides(){
   const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
      }
  }
  var uri = "http://127.0.0.1:4000/rides/"
  //load inventory sold in a day
 
  fetch(uri, options)
  .then(r =>  r.json().then(data => 
      {
        dataRides = JSON.parse(JSON.stringify(data))
        displayRides()   
          }
     
      ));
}

function displayRides(){
    const activeRides = document.getElementById("active_rides")
    const activeRequests = document.getElementById("active_requests")

    for(i=0; i<dataRides.length;i++){
        const ride = document.createElement('div')
        ride.setAttribute('class','ride')

        const divImage = document.createElement('div')
        divImage.setAttribute('style','float:left; width: 20%;')
        const img = document.createElement('img')
        img.setAttribute('style','height:100px;width:100px')

        const divContent1 = document.createElement('div')
        divContent1.setAttribute('style','float: left; width: 40%;padding-left: 1rem;')
        const name = document.createElement('p')
        const phone = document.createElement('p')
        const passengers = document.createElement('p')

        const divContent2 = document.createElement('div')
        divContent2.setAttribute('style','float: left; width: 40%;padding-left: 1rem;')
        const origin = document.createElement('p')
        const destination = document.createElement('p')
        const departure = document.createElement('p')

        name.textContent = "Name: "+ dataRides[i].name
        phone.textContent = "Phone: "+ dataRides[i].phone
        passengers.textContent = "Passengers: "+  dataRides[i].passengers
        origin.textContent = "Location: "+  dataRides[i].location
        destination.textContent = "Destination: "+  dataRides[i].destination
        departure.textContent = "Departure: "+  dataRides[i].departure
        

        if(dataRides[i].driver_phone == "" && dataRides[i].driver_ID==""){
            activeRequests.appendChild(ride) 
        }
        else  activeRides.appendChild(ride)

        console.log(dataRides[i])
          
        ride.appendChild(divImage)
        divImage.appendChild(img)
        ride.appendChild(divContent1)
        divContent1.appendChild(name)
        divContent1.appendChild(phone)
        divContent1.appendChild(passengers)
        ride.appendChild(divContent2)
        divContent2.appendChild(origin)
        divContent2.appendChild(destination)
        divContent2.appendChild(departure)
    }

}
    

