import { Content } from "./content-interface";

export class ContentLists {
  private _items: Content[];

  constructor() {
    this._items = [];
  }

  get items():Content[] {
    return this._items;
  }

  addItem(item: any) {
    this._items.push(item);
  }

  getme() {
    return this._items.length;
  }

  get(index: number) {
    if (index <= this._items.length){
     return `
            <img src= ${this._items[index].imageURL} width="500px" height="300px" class="Game-image" />
            <div style="margin:20px">
              <h2 class='Game-Name'>${this._items[index].title}</h2>
              <p class="Game-description">Desription: ${this._items[index].description}</p>
              <p>Type: ${this._items[index].type}</p>
              <p>Publisher: ${this._items[index].publisher}</p>
            </div>
      `;

    } else {
      return this.error(index);
    }
    }
    error(index: number){
      return `<div class="error"> This Item is temporary unavailable </div>`
    }
  }