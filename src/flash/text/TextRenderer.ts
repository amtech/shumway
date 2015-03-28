/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: TextRenderer
module Shumway.AVMX.AS.flash.text {
  import notImplemented = Shumway.Debug.notImplemented;
  import asCoerceString = Shumway.AVMX.asCoerceString;
  export class TextRenderer extends ASObject {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;

    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // [];
    
    constructor () {
      super();
    }

    // static _antiAliasType: string;
    // static _maxLevel: number /*int*/;
    // static _displayMode: string;
    get antiAliasType(): string {
      notImplemented("public flash.text.TextRenderer::get antiAliasType"); return;
      // return this._antiAliasType;
    }
    set antiAliasType(value: string) {
      value = asCoerceString(value);
      notImplemented("public flash.text.TextRenderer::set antiAliasType"); return;
      // this._antiAliasType = value;
    }
    get maxLevel(): number /*int*/ {
      notImplemented("public flash.text.TextRenderer::get maxLevel"); return;
      // return this._maxLevel;
    }
    set maxLevel(value: number /*int*/) {
      value = value | 0;
      notImplemented("public flash.text.TextRenderer::set maxLevel"); return;
      // this._maxLevel = value;
    }
    get displayMode(): string {
      notImplemented("public flash.text.TextRenderer::get displayMode"); return;
      // return this._displayMode;
    }
    set displayMode(value: string) {
      value = asCoerceString(value);
      notImplemented("public flash.text.TextRenderer::set displayMode"); return;
      // this._displayMode = value;
    }
    static setAdvancedAntiAliasingTable(fontName: string, fontStyle: string, colorType: string, advancedAntiAliasingTable: any []): void {
      fontName = asCoerceString(fontName); fontStyle = asCoerceString(fontStyle); colorType = asCoerceString(colorType); advancedAntiAliasingTable = advancedAntiAliasingTable;
      notImplemented("public flash.text.TextRenderer::static setAdvancedAntiAliasingTable"); return;
    }
    
  }
}
