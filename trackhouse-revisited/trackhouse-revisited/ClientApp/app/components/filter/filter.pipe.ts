import { Pipe, PipeTransform } from '@angular/core';
import { WordCount } from '../../tsmodels/wordcount';
@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    filtered: WordCount[];

    transform(items: WordCount[], letter: string): WordCount[] {

        if (!items) return [];
        if (!letter) return items;

        this.filtered = [];

        letter = letter.toLowerCase();

        var letterMatch = new RegExp(letter, 'i');

        for (var i = 0; i < items.length; i++) {
            var item = items[i];

            if (letterMatch.test(item.word)) {
                this.filtered.push(item);
            }
        }

        return this.filtered.sort();      

    }
}