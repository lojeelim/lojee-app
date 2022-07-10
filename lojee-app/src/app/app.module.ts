import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
// import { graphQLURL } from '../environments/environment';
 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link:  httpLink.create({
          // getting graphql endpoint from the env.
          uri:  'https://lojee-app.herokuapp.com/v1/graphql'
        
          // uri: graphQLURL.URL,
        })
      };
    },  
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
