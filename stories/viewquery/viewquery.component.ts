import { Component, ViewChild } from '@angular/core';
import { EditorComponent } from '../../tinymce-angular-component/src/main/ts/editor/editor.component';
import { apiKey } from '../Settings';

@Component({
  selector: 'viewquery',
  templateUrl: './viewquery.component.html'
})
export class ViewQueryComponent {
  public apiKey = apiKey;
  @ViewChild(EditorComponent, { static: true }) public editorComponent!: EditorComponent;

  public undo() {
    this.editorComponent.editor.undoManager.undo();
  }

  public redo() {
    this.editorComponent.editor.undoManager.redo();
  }
}
