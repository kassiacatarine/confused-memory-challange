import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-confused-memory",
  templateUrl: "./confused-memory.component.html",
  styleUrls: ["./confused-memory.component.sass"]
})
export class ConfusedMemoryComponent implements OnInit {
  @Input() memory: any;
  constructor() {}

  ngOnInit(): void {}
}
