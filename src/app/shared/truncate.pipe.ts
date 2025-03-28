import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'truncate'
})
export class TrucatePipe {

  transform(value: string, limit: number = 65): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
