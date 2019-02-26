import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(value: any, search: string): any {
    if  (!search) {return value; }

    const solution = value.filter(v => {
      if ( !v ) {return;}
      return  v.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    return solution;
  }

}
