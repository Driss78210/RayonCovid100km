import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { MenuPage } from 'src/app/pages/menu/menu.page';
import { CadreBasiqueComponent } from './core-ui/cadre-basique/cadre-basique.component';
import { AccueilComponent } from './pages/accueil/accueil/accueil.component';
import { AccueilPage } from 'src/app/pages/accueil/accueil.page';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { MapComponent } from './map/map.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadreBasiqueComponent,
    AccueilComponent,
    MenuPage,
    AccueilPage,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      compiler: {
          provide: TranslateCompiler,
          useClass: TranslateMessageFormatCompiler
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
