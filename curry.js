//函数柯里化定义：接收一部分参数，返回一个函数接收剩余参数，接收足够参数后，执行原函数。


const curry = (fn,...args)=>{

  if(fn.length>args.length){
    return (..._args)=>curry(fn,...args,..._args);

  }
  else {
    return fn(...args);
  }

}


function add(a,b,c){
  return a+b+c;
}

const curriedAdd = curry(add);


console.log(curriedAdd(1)(2)(3)) // 输出 6
console.log(curriedAdd(1, 2)(3)) // 输出 6
console.log(curriedAdd(1)(2, 3)) // 输出 6