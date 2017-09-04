# Angularjs 2 Essentials
- install angular cli

        npm install -g angular-cli

- creatting project with sass style

        ng new project1 --style=sass // for sass
        ng new project --style=scss  // for scss
        ng new project --style=scss --routing=true // off adding routing module 

- First install Bootstrap from npm

        npm install bootstrap@next

- Build the project

        ng build

- Building the project with production environment

        # these are equivalent
        ng build --target=production --environment=prod
        ng build --prod --env=prod
        ng build --prod
        # and so are these
        ng build --target=development --environment=dev
        ng build --dev --e=dev
        ng build --dev
        ng build

- htaccess rewrite options for proper angular routing

        Options +FollowSymLinks

        <ifModule mod_rewrite.c>
                RewriteEngine On
                RewriteCond %{REQUEST_FILENAME} !-f
                RewriteCond %{REQUEST_FILENAME} !-d
                RewriteCond %{REQUEST_URI} !index
                RewriteRule (.*) index.html [L]
        </ifModule>

  - [setup link](https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2)


- Building and starting project

        ng serve

- Then add the needed script files to apps[0].scripts:

        "scripts": [
            "../node_modules/jquery/dist/jquery.js",
            "../node_modules/tether/dist/js/tether.js",
            "../node_modules/bootstrap/dist/js/bootstrap.js"
        ],

- Finally add the Bootstrap CSS to the apps[0].styles array:

        "styles": [
            "../node_modules/bootstrap/dist/css/bootstrap.css",
            "styles.css"
        ],

- Adding font awesome style for icons

        npm install font-awesome --save

- Add font-awesome 

        "styles": [
            "../node_modules/bootstrap/dist/css/bootstrap.css",
            "styles.css",
            "../node_modules/font-awesome/scss/font-awesome.scss"
        ],

- Adding echarts

        npm install echarts --save
        npm install @types/echarts --save-dev

- Adding d3

        npm install d3 --save
        npm install @types/d3 --save-dev

- Initializing d3 and echarts instances


        import { Component, ElementRef, ViewChild } from '@angular/core';
        import * as D3 from 'd3/index';
        import * as Echarts from 'echarts';

        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
        })
        export class AppComponent{
        title = 'app works!';
        @ViewChild('mapRef') mapRef;
        d3Element: any;
        echartElement: any;
        d3Svg: any;
        constructor(private element: ElementRef) {
            
            //this.echartElement.setOptions();
        }

        ngAfterViewInit(){
        this.d3Element = D3.select(this.element.nativeElement);
        this.d3Svg = this.d3Element.append('svg')
            .attr('width', "200px")
            .attr('height', "200px")
            .append('g')
            .attr('transform', 'translate(100px, 100px)');
            this.echartElement = Echarts.init(this.mapRef.nativeElement);  
        }


        }

- Updating Latest angular cli

        npm uninstall -g angular-cli
        npm cache clean
        npm install -g angular-cli@latest

- Updating exising project with latest code

        rm -rf node_modules dist # use rmdir on Windows
        npm install --save-dev angular-cli@latest
        npm install
        ng init

- adding jquery ui library

        npm install jqueryui --save
        npm install @types/jqueryui --save-dev 

- adding jquery migrate library (needed for jqueryui)

        npm install jquery-migrate --save

- adding sass modules
        npm install node-sass --save-dev

- For one way binding

        <h2>{{hero.name}}</h2>

- For Two way binding

        <input [(ngModel)]="hero.name" placeholder="Name">

- For each array value

        <li *ngFor="let hero of heros">
            <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>

- Checking and adding class

        <li *ngFor="let hero of heros"
            [class.selected]="hero == selectedHero" (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>

- Onclick and Edit modifications

        import { NgModule, Component, ElementRef, ViewChild } from '@angular/core';

        export class Hero {
        id: number;
        name: string;
        }

        const HEROES: Hero[] = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
        ]; 

        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
        })
        export class AppComponent{
        
        constructor(private element: ElementRef) {
        }

        title = 'Tour of Heroes';
        hero1: Hero = {id: 1, name: "basha"}
        heros = HEROES;
        selectedHero: Hero;
        
        ngAfterViewInit(){ 
            
        }

        onSelect(hero: Hero): void {
            this.selectedHero = hero;
        }

        }



        <h2>My Heroes</h2>
        <ul class="heroes">
        <li *ngFor="let hero of heros"
            [class.selected]="hero == selectedHero" (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>
        </ul>

        <div *ngIf="selectedHero">
        <h3>{{selectedHero.name}} details!</h3>
        <div>
            <label>Id: </label>{{selectedHero.id}}
        </div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="selectedHero.name" placeholder="Name" />
        </div>
        </div>

# Structural directives
- There are three kinds of Angular directives:

    - Components
        - The Component is really a directive with a template. It's the most common of the three directives and we write lots of them as we build our application.
    - Attribute directives
        - A Structural directive changes the DOM layout by adding and removing DOM elements.
        - three of the built-in structural directives 
            - ngIf, ngSwitch, ngFor.

                    <div *ngIf="hero">{{hero}}</div>
                    <div *ngFor="let hero of heroes">{{hero}}</div>
                    <div [ngSwitch]="status">
                    <template [ngSwitchCase]="'in-mission'">In Mission</template>
                    <template [ngSwitchCase]="'ready'">Ready</template>
                    <template ngSwitchDefault>Unknown</template>
                    </div>

    - Structural directives


# Custome Directives

 - Structaral directives

                import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

                @Directive({
                        selector: '[hideElement]'
                })
                export class HideElementDirective {

                constructor(
                        private templateRef: TemplateRef<any>,
                        private viewContainerRef: ViewContainerRef) { }

                @Input() set hideElement(isHidden: boolean){
                        if(!isHidden){
                                this.viewContainerRef.createEmbeddedView(this.templateRef)
                        } else if(isHidden){
                                this.viewContainerRef.clear();
                        }
                        }

                }


# Template Syntax
## Interpolation

- We met the double-curly braces of interpolation, {{ and }}, early in our Angular education.

    -       <p>My current hero is {{currentHero.firstName}}</p>

    -       <h3>
                {{title}}
                <img src="{{heroImageUrl}}" style="height:30px">
            </h3>

- Angular first evaluates and then converts to a string

        <p>The sum of 1 + 1 is {{1 + 1}}</p>

- The expression can invoke methods of the host component, as we do here with getVal()

        <p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}</p>

## Template expressions

- A template expression produces a value
- Angular executes the expression and assigns it to a property of a binding target
- JavaScript expressions that have or promote side effects are prohibited
    - assignments (=, +=, -=, ...)
    - new
    - chaining expressions with ; or 
    - increment and decrement operators (++ and --)
- Other notable differences from JavaScript Syntax
    - no support for the bitwise operators | and &
    - new template expression operators, such as | and ?.
    
            <div>Title through uppercase pipe: {{title | uppercase}}</div>
            <div> Title through a pipe chain: {{title | uppercase | lowercase}} </div>

            <!-- pipe with configuration argument => "February 25, 1970" -->
            <div>Birthdate: {{currentHero?.birthdate | date:'longDate'}}</div>

            <div>{{currentHero | json}}</div>
            The generated output would look something like this
            { "firstName": "Hercules", "lastName": "Son of Zeus" }

- safe navigation operator (?.)
    - is a fluent and convenient way to guard against null and undefined values in property paths

            The current hero's name is {{currentHero?.firstName}}

    - It works perfectly with long property paths such as a?.b?.c?.d.
    - We could code around that problem with NgIf. as well

            <div *ngIf="nullHero">The null hero's name is {{nullHero.firstName}}</div>


## Template statements
- As with expressions, statements can refer only to what's in the statement context — typically the component instance to which we're binding the event.
- The onSave in (click)="onSave()" is sure to be a method of the data-bound component instance.

# Binding syntax

- One-way from data source to view target
    - Interpolation Property Attribute Class Style

            {{expression}}
            [target] = "expression"
            bind-target = "expression"

- One-way from view target to data source

            (target) = "statement"
            on-target = "statement"

- Two-way

            [(target)] = "expression"
            bindon-target = "expression"

- Binding types other than interpolation have a target name to the left of the equal sign, either surrounded by punctuation ([], ()) or preceded by a prefix (bind-, on-, bindon-).
# Binding targets
- Property
    - Element property

            <img [src] = "heroImageUrl">

    - Component property

            <hero-detail [hero]="currentHero"></hero-detail>

    - Directive property

            <div [ngClass] = "{selected: isSelected}"></div>
- Event
    - Element event

            <button (click) = "onSave()">Save</button>

    - Component event

            <hero-detail (deleteRequest)="deleteHero()"></hero-detail>

    - Directive event

            <div (myClick)="clicked=$event">click me</div>

            @Output('myClick') clicks = new EventEmitter<string>(); //  @Output(alias) propertyName = ...
            OR
            @Directive({
                outputs: ['clicks:myClick']  // propertyName:alias
            })
- Two-way

        <input [(ngModel)]="heroName">

- Attribute

        <button [attr.aria-label]="help">help</button>

- Class

        <div [class.special]="isSpecial">Special</div>

- Style

        <button [style.color] = "isSpecial ? 'red' : 'green'">

- service module

        import { Injectable, Inject } from '@angular/core';
        import { Http, Response, Headers, RequestOptions } from '@angular/http';
        import {Observable} from 'rxjs/Rx';

        @Injectable()
        export class SuggestionsService {

                results: any;
                private url = '../api.php?call=Controller&type=function';  // URL to web api
                constructor (private http: Http) {}

                getData(prefix) : Observable<JSON> {
                var thisVew = this;
                
                return this.http.get(this.url+"&prefix="+prefix)
                        .map(this.formatData)
                        .catch(this.handleError);
                }

                private formatData(res: Response) {
                        let results = res.json();
                        return results || { };
                }

                private handleError(error: any) {
                        return Observable.throw(error.json().error || 'Server error');
                }

        }
