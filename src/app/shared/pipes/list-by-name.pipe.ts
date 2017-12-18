import { Pipe, PipeTransform } from '@angular/core';
import { ListItem } from '../list/item/model/item.model';

@Pipe({
  name: 'listByName'
})
export class ListByNamePipe implements PipeTransform {

  transform(list: ListItem[], input: string) {
    if(list){
      return list.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
    }
    return list;
  }

}
