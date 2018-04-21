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
    searchText: string;

    constructor(private http: Http, private filter: FilterPipe) {

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

    RetrieveData(char: string) {

        this.filteredResult = []

        //this.http.get("http://localhost:59473/api/counter").subscribe(x => { this.result = x.toString() });

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

        if (char == "") {

            let filterSet = new Set();

            this.wordcounts.forEach(x => {

                let oldSize = filterSet.size;

                filterSet.add(x.word);

                if (oldSize !== filterSet.size) {

                    this.filteredResult.push(x);
                    
                }
            })

        } else {
            
            let filterSet = new Set();

            this.wordcounts.forEach(x => {

                let oldSize = filterSet.size;

                filterSet.add(x.word);

                if (oldSize !== filterSet.size) {

                    if (x.word.charAt(0).toLowerCase() == char.toLowerCase()) {

                        this.filteredResult.push(x);

                    }
                }
            })
        }
    }
}

interface TableData {
    word: string;
    count: number;
}

