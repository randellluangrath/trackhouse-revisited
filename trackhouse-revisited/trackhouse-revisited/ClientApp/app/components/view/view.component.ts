import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter/filter.pipe';
import { forEach } from '@angular/router/src/utils/collection';
import { WordCount } from '../../tsmodels/wordcount';
import { NgModel } from '@angular/forms/src/directives/ng_model';

@Component({
    selector: 'view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent {

    result: string;
    words: any[];
    wordcounts: WordCount[] = [];
    filteredResult: WordCount[] = [];
    wordcount: WordCount;

    constructor(private http: Http, public filter: FilterPipe) {

        this.result = "kanye kanye kanye jesus god gospel prayer love peace elevator elevator";

        this.words = this.result.split(" ");

        for (let word of this.words) {

            var re = new RegExp(word, 'g');

            var match = this.result.match(re)!;

            var count = match.length;

            this.wordcount = {
                word: word,
                count: count
            };

            this.wordcounts.push(this.wordcount);

        }

        let filterSet = new Set();

        this.wordcounts.forEach(x => {

            let oldSize = filterSet.size;

            filterSet.add(x.word);

            if (oldSize !== filterSet.size) {

                this.filteredResult.push(x);

            }
        })           
       
    }

}

interface TableData {
    word: string;
    count: number;
}

