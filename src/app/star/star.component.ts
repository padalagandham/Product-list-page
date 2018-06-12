import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector : 'star-rating',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarRating implements OnChanges{
    @Input() rating : number;
    starWidth : number;

    ngOnChanges() {
        this.starWidth = this.rating * 86/5;
    }
}