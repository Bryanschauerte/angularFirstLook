import { Pipe, PipeTransform } from '@angular/core';
/*
 * returns all the keys in an object (first nested depth)
 * Takes an object argument
 * Usage:
 *   obj | objectKeyValuesArr: obj
 * Example:
 *   {{ user |  objectKeyValuesArr: user}}
 *   returns ['name', 'age', 'favorite hobby', 'email']
*/
@Pipe({name: 'ObjectKeysPipe'})
export class ObjectKeysPipe implements PipeTransform {
  transform(item: any): string[] {
    let keys = Object.keys(item);
    return keys;
  }
}
