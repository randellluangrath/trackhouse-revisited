import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter/filter.pipe';
import { forEach } from '@angular/router/src/utils/collection';
import { WordCount } from '../../tsmodels/wordcount';

@Component({
    selector: 'view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent {

    result: string;
    words: any[];
    wordcounts: WordCount[] = [];
    wordcount: WordCount;

    constructor(private http: Http, private filter: FilterPipe) {

    }

    RetrieveData(char: string) {

        this.wordcounts = [];

        //this.http.get("http://localhost:59473/api/counter").subscribe(x => { this.result = x.toString() });

        this.result = "kanye kanye kanye matt dick boys like hair ass nose teeth titties";

        this.words = this.result.split(" ");

        if (char == "*") {
        
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
        }
        else {
            
            //this.result = this.filter.transform(this.result, char);
        }        

        this.wordcounts = this.wordcounts.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })

    }
}

