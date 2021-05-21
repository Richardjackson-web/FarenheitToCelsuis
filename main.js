function convertFahrToCelsius(data) {
  
    let fahrCels = function(){
      
          if(data.constructor == [].constructor){
            return 'array.'
          }
          else if(data.constructor == {}.constructor){
            return 'object.'
          }
    }()
  
    if(data instanceof Object){
      if(data instanceof Array){
        return  `${JSON.stringify(data)} is not a valid number but a/an ${fahrCels}`
      }
      return  `${JSON.stringify(data)} is not a valid number but a/an ${fahrCels}`
    }
  
    return Number.parseFloat((data-32)/1.8).toFixed(4);
   
  }