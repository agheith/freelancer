import { Component } from '@angular/core';
import { Document } from './document'

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})

export class DocumentsComponent{
    pageTitle: string= "Document Dashboard"

    documents: Document[] = [
       {
           title: "My First Doc",
           description: "First Doc Description",
           file_url: "http://google.com",
           updated_at: "05/13/2017",
           image_url: "https://static.pexels.com/photos/34586/pexels-photo.jpg",

       },
       {
           title: "My Second Doc",
           description: "Second Doc Description",
           file_url: "http://google.com",
           updated_at: "05/13/2017",
           image_url: "https://static.pexels.com/photos/34586/pexels-photo.jpg",

       },
       {
           title: "My third Doc",
           description: "third Doc Description",
           file_url: "http://google.com",
           updated_at: "05/13/2017",
           image_url: "https://static.pexels.com/photos/34586/pexels-photo.jpg",

       }
    ]
}
