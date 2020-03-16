import { Component, OnInit } from "@angular/core";
import { Observable, of, from } from "rxjs";
import { delay, concatMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  public memories: any = [
    {
      image: 1,
      title: "Ichigo",
      date: new Date("10-03-2000")
    },
    {
      image: 2,
      title: "Image 2",
      date: new Date("01-03-2000")
    },
    {
      image: 3,
      title: "Image 3",
      date: new Date("12-03-2000")
    },
    {
      image: 4,
      title: "Image 4",
      date: new Date("06-03-2000")
    },
    {
      image: 5,
      title: "Image 5",
      date: new Date("04-04-2000")
    },
    {
      image: 6,
      title: "Image 6",
      date: new Date("12-08-2000")
    }
  ];
  memory$: Observable<any>;

  ngOnInit(): void {
    this.memory$ = this.loadData$();
  }

  private loadData$(): Observable<any> {
    return from(this.memories).pipe(
      concatMap(item => of(item).pipe(delay(3000)))
    );
  }
}
