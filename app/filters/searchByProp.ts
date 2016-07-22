import {Pipe , PipeTransform} from '@angular/core';
import { filter } from 'lodash';

@Pipe({
    name:"searchByProp"
})
export class SearchByPropPipe implements PipeTransform{
    transform(items, [searchText]){
        debugger;
        if(items == null){
            return null;
        }
        if(searchText == undefined){
            return items;
        }
        return items.filter((item)=>item.Name.toLowerCase().startsWith(searchText.toLowerCase()));
    }
}