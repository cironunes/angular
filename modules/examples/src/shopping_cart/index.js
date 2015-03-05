import { bootstrap, Component, Template, Foreach } from 'angular2/angular2';

@Component({
  selector: 'shopping-cart-app',
  componentServices: [CatalogService]
})

@Template({
  url: 'catalog.html',
  directives: [Foreach]
})

class ShoppingCmp {
  items: List<Object>;

  constructor(catalog: CatalogService) {
    this.items = catalog.items;
  }
}

class CatalogService {
  items: List<Object>;

  constructor() {
    this.items = [
      { name: 'Ferrari', price: 2e5 },
      { name: 'Porsche', price: 1e5 }
    ];
  }
}

export function main() {
  bootstrap(ShoppingCmp);
}
