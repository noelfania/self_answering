var result = (function a(){

    var s = 1;

    return (function loop(){

        if(s != 5){
            s++;
            loop();
        }
        //if(s == 5){ 
        else{
            return s; //이거는 안됨 undefined
        }
        
        //return s; //이거는 됨 5

        // 이유가뭘까???

    })()

})()

console.log(result)