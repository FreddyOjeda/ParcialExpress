let datos=[]

fetch('https://starwars-developuptc.vercel.app/')
    .then(resp=>resp.json())
    .then(data=>{
        const tbody = document.getElementById('tbody');
        datos=data.data
        let i =0
        datos.forEach(element => {
            console.log(i++);
            //console.log(element.data)
            const tr = document.createElement('tr')
            const colCode = document.createElement('td')
            colCode.appendChild(document.createTextNode(element._id))
            tr.appendChild(colCode)
    
            const colName = document.createElement('td')
            colName.appendChild(document.createTextNode(element.name))
            tr.appendChild(colName)
    
            const colBirth = document.createElement('td')
            colBirth.appendChild(document.createTextNode(element.height))
            tr.appendChild(colBirth)
            

            const colmas = document.createElement('td')
            colmas.appendChild(document.createTextNode(element.mass))
            tr.appendChild(colmas)

            const colhc = document.createElement('td')
            colhc.appendChild(document.createTextNode(element.hair_color))
            tr.appendChild(colhc)

            const colsc = document.createElement('td')
            colsc.appendChild(document.createTextNode(element.skin_color))
            tr.appendChild(colsc)

            const colec = document.createElement('td')
            colec.appendChild(document.createTextNode(element.eye_color))
            tr.appendChild(colec)

            const colby = document.createElement('td')
            colby.appendChild(document.createTextNode(element.birth_year))
            tr.appendChild(colby)

            const colg = document.createElement('td')
            colg.appendChild(document.createTextNode(element.gender))
            tr.appendChild(colg)

            const colhw = document.createElement('td')
            colhw.appendChild(document.createTextNode(element.homeworld))
            tr.appendChild(colhw)

            const colsp = document.createElement('td')
            colsp.appendChild(document.createTextNode(element.species))
            tr.appendChild(colsp)

            const details = document.createElement('td')
            const button = document.createElement('button'); 
            button.type = 'button'; 
            button.innerText = 'Detalles'; 
            button.value=element._id;
            details.appendChild(button); 
            tr.appendChild(details)
            tr.id='1'
            tbody.appendChild(tr)
        })
    })

    function detalles(id){
        
    }


    function filtro(){
        const id = document.getElementById('id').value 
        fetch('https://starwars-developuptc.vercel.app/')
        .then(resp=>resp.json())
        .then(data=>{
            data.data.forEach(element=>{
                if(element.homeworld==id || element.species==id){
            //console.log(element.data)
            const tr = document.createElement('tr')
            const colCode = document.createElement('td')
            colCode.appendChild(document.createTextNode(element._id))
            tr.appendChild(colCode)
    
            const colName = document.createElement('td')
            colName.appendChild(document.createTextNode(element.name))
            tr.appendChild(colName)
    
            const colBirth = document.createElement('td')
            colBirth.appendChild(document.createTextNode(element.height))
            tr.appendChild(colBirth)
            

            const colmas = document.createElement('td')
            colmas.appendChild(document.createTextNode(element.mass))
            tr.appendChild(colmas)

            const colhc = document.createElement('td')
            colhc.appendChild(document.createTextNode(element.hair_color))
            tr.appendChild(colhc)

            const colsc = document.createElement('td')
            colsc.appendChild(document.createTextNode(element.skin_color))
            tr.appendChild(colsc)

            const colec = document.createElement('td')
            colec.appendChild(document.createTextNode(element.eye_color))
            tr.appendChild(colec)

            const colby = document.createElement('td')
            colby.appendChild(document.createTextNode(element.birth_year))
            tr.appendChild(colby)

            const colg = document.createElement('td')
            colg.appendChild(document.createTextNode(element.gender))
            tr.appendChild(colg)

            const colhw = document.createElement('td')
            colhw.appendChild(document.createTextNode(element.homeworld))
            tr.appendChild(colhw)

            const colsp = document.createElement('td')
            colsp.appendChild(document.createTextNode(element.species))
            tr.appendChild(colsp)

            const details = document.createElement('td')
            const button = document.createElement('button'); 
            button.type = 'button'; 
            button.innerText = 'Detalles'; 
            button.value=element._id;
            details.appendChild(button); 
            tr.appendChild(details)
            tbody.appendChild(tr)
                }
            })
        })
    }