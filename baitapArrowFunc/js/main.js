
let colorList=["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

// let container=document.getElementById("colorContainer");
// loadColorPick=(()=>{
    //   for(let o=0;o<colorList.length;o++)
    //   container.innerHTML+=0==o?"<button class='color-button "+colorList[o]+" active'></button>":"<button class='color-button "+colorList[o]+"'></button>"
    
    //   }),
    //   loadColorPick();
    let colorContainer= document.getElementById("colorContainer");
    
    let colorPickloading = (color)=>{
        let output = "";
        for(let index = 0 ; index < color.length;index++){
        let c = color[index];
        // output = colorContainer.innerHTML+=
        // `
        // <button class='color-button ${c}'></button>
        // `
            if (index == 0){
                output = colorContainer.innerHTML+=`<button class='color-button ${c} active'></button>`
            }else{
                output = colorContainer.innerHTML+=`<button class='color-button ${c}'></button>`
            }
        }
    }
    colorPickloading(colorList);
    
    let picker = document.getElementsByClassName('color-button');
    let house = document.getElementById('house');

    for ( let i = 0; i< picker.length ; i++ ){
        picker[i].addEventListener('click',function(){
            changeColor(colorList[i], i);
        });
        changeColor = (i, j) =>{
            for ( let i = 0 ; i< picker.length ; i++)
            picker[i].classList.remove('active');
            picker[j].classList.add('active'),(house.className = 'house ' + i);
        };
    }



