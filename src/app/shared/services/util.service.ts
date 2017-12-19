export class UtilService{

    orderList(list:any[],property,reverse){
        list = list.sort( (a, b) =>{ 
            if(a[property] === b[property]) {return 0};
            return a[property] < b[property] ? -1 : 1;
        });
        if(reverse){
            list = list.reverse();
        }
        return list.slice();
    }
}