const getResult = (async (val1, val2) => {
    let result = new Promise(resolve => {
        resolve(slowMath.add(val1, val2));
    });//promise that adds val1 and val2
    result.catch((err) => {
        console.log(err);
    });//catches any errors
    result = await result;//converts `result` to variable from promise
    console.log(result);//logs new variable
    let nextResult = new Promise(resolve => {
        resolve(slowMath.multiply(result, 2));
    });//promise that multiplies `result` * 2
    nextResult.catch((err) => {
        console.log(err);
    });//catches any errors
    nextResult = await nextResult;//converts `nextResult` to variable from promise
    console.log(nextResult);//logs new variable
    result = new Promise(resolve => {
        resolve(slowMath.divide(nextResult, 4));
    });//promise that divides `nextResult` by 4
    result.catch((err) => {
        console.log(err);
    });//catches any errors
    result = await result;//converts `result` to variable from promise
    console.log(result);//logs new variable
    nextResult = new Promise(resolve => {
        resolve(slowMath.subtract(result, 3));
    });//promise that subtracts 3 from `result`
    nextResult.catch((err) => {
        console.log(err);
    });//catches any errors
    nextResult = await nextResult;//converts `nextResult` to variable from promise
    console.log(nextResult);//logs new variable
    result = new Promise(resolve => {
        resolve(slowMath.add(nextResult, 98));
    });//promise that adds 98 to `nextResult`
    result.catch((err) => {
        console.log(err);
    });//catches any errors
    result = await result;//converts `result` to variable from promise
    console.log(result);//logs new variable
    nextResult = new Promise(resolve => {
        resolve(slowMath.remainder(result, 2))
    });//promise that finds the remainder from dividing `result` by 2
    nextResult.catch((err) => {
        console.log(err);
    });//catches any errors
    nextResult = await nextResult;//converts `nextResult` to variable from promise
    console.log(nextResult);//logs new variable
    result = new Promise(resolve => {
        resolve(slowMath.multiply(nextResult, 50));
    });//promise that multiplies `nextResult` by 50
    result.catch((err) => {
        console.log(err);
    });//catches any errors
    result = await result;//converts `result` to variable from promise
    console.log(result);//logs new variable
    nextResult = new Promise(resolve => {
        resolve(slowMath.remainder(result, 40));
    });//promise that finds the remainder from dividing `result` by 40
    nextResult.catch((err) => {
        console.log(err)
    });//catches any errors
    nextResult = await nextResult;//converts `nextResult` to variable from promise
    console.log(nextResult);//logs new variable
    result = new Promise(resolve => {
        resolve(slowMath.add(nextResult, 32));
    });//promise that adds 32 to `nextResult`
    result.catch((err) => {
        console.log(err);
    });//catches any errors
    let finalResult = await result;//creates finalResult variable from `result` promise
    console.log(finalResult);//logs new variable
});//promise chain that runs through all math logged to console

getResult(6, 2);
setTimeout(() => {
    getResult(1, 1);
}, 9002);//runs getResult() a second time after the first call is done