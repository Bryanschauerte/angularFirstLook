import { Pipe, PipeTransform } from '@angular/core';
/*
 * returns all the values in an object (first nested depth)
 * Takes an object argument
 * Usage:
 *   obj | objectKeyValuesArr: obj
 * Example:
 *   {{ user |  objectKeyValuesArr: user}}
 *   returns ['bob', 22, 'hiking', 'bob@bob.com']
*/
@Pipe({name: 'objectKeyValuesArr'})
export class ObjectKeyValuesPipe implements PipeTransform {
  transform(item: any): string[] {
    // let depth = parseFloat(depth);
    // depth = isNaN(depth)? 1: depth;
      let returning = [];
      let keys = Object.keys(item);
      keys.map(key => returning.push(item[key]))




    return returning;
  }
}
