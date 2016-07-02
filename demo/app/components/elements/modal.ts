import { Component , Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, <Type>CodeblockComponent, <Type>PrismJsDirective],
    selector : "sm-page-modal",
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Modal</h1>
        <p>Semantic UI Modal module <i class="icon external"></i> 
        <a href="http://semantic-ui.com/modules/modal.html" target="_blank">Semantic UI Modal</a></p>
    </div>
</div>

<div class="main ui container">
    <p>Options can be passed in form of JavaScript object. Full list of settings can be found on: </p>
    <a href="http://semantic-ui.com/modules/modal.html#/settings" target="_blank">
    http://semantic-ui.com/modules/modal.html#/settings
    </a>
    <h4 class="ui header">Demo basic</h4>
    <button class="ui button green" (click)="myModal.show()">Click me</button>
    <sm-modal title="Hello from Modal" class="basic" #myModal>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </sm-modal>
    
    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;button class="ui button green" (click)="myModal.show()">Click me&lt;/button>
&lt;sm-modal title="Hello from Modal" class="basic" #myModal>...&lt;/sm-modal>
</sm-codeblock>
    <h4 class="ui header">Demo normal</h4>
    <button class="ui button teal" (click)="myModalNormal.show()">Click me</button>
    <sm-modal title="Hello from Modal" class="" icon="home" #myModalNormal>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </sm-modal>
    
    <h4 class="ui header">Demo ( blurring )</h4>
    <button class="ui button teal" (click)="myModalBluring.show({blurring: true})">Click me</button>
    <sm-modal #myModalBluring title="Hello from Modal" class="fluid">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </sm-modal>
</div>
`
})

export class ModalComponent {}