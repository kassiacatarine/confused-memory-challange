import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ConfusedMemoryComponent } from "./confused-memory/confused-memory.component";

import { MomentModule } from "ngx-moment";

@NgModule({
  declarations: [AppComponent, ConfusedMemoryComponent],
  imports: [BrowserModule, MomentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
