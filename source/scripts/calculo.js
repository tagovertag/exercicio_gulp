function  canal(){
    let n1 = 5
    let n2 = 3
    let res = n1 * n2
    if(res % 2  == 0){
        return res + ' par'

    } else
    return res + ' impar'
}

let res = canal()
console.log(res)