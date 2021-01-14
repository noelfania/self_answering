var result = (function a(){

    var s = 1;

    return (function loop(){

        if(s != 3){
            s++;
            loop();
        }
        else{
            return s; //이거는 안됨 undefined
        }
        
        //return s; //이거는 됨 3

        // Q. 이유는?
		// A. else 문에 안들어감

    })()

})()

console.log(result)