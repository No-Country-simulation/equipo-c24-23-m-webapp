import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}


@Component({
  selector: 'app-restaurante-menu',
  imports: [CommonModule],
  templateUrl: './restaurante-menu.component.html',
  styleUrl: './restaurante-menu.component.css'
})

export class RestauranteMenuComponent implements OnInit {


  restaurantId: number | null = null;
  restaurantName: string = '';
  products: Product[] = [];

  // Datos de prueba simulando la API del backend
  allRestaurants = [
    {
      id: 1,
      name: 'Restaurante Italiano',
      image: 'https://via.placeholder.com/300x200',
      products: [
        { id: 101, name: 'Pizza Margarita', image: 'https://via.placeholder.com/150', description: 'Pizza con salsa de tomate, mozzarella y albahaca.', price: 2500 },
        { id: 102, name: 'Pasta Carbonara', image: 'https://via.placeholder.com/150', description: 'Espaguetis con salsa de huevo, queso y panceta.', price: 2200 },
        { id: 103, name: 'Lasaña Boloñesa', image: 'https://via.placeholder.com/150', description: 'Lasaña con carne y salsa bechamel.', price: 2800 },
        { id: 104, name: 'Risotto de Hongos', image: 'https://via.placeholder.com/150', description: 'Arroz cremoso con champiñones y queso parmesano.', price: 2700 },
        { id: 105, name: 'Tiramisú', image: 'https://via.placeholder.com/150', description: 'Postre italiano con café y mascarpone.', price: 1500 },
        { id: 106, name: 'Bruschetta', image: 'https://via.placeholder.com/150', description: 'Pan tostado con tomate, ajo y albahaca.', price: 1200 }
      ]
    },
    {
      id: 2,
      name: 'Sushi Express',
      image: 'https://via.placeholder.com/300x200',
      products: [
        { id: 201, name: 'Sushi Roll', image: 'https://via.placeholder.com/150', description: 'Rollo de sushi con salmón y aguacate.', price: 1800 },
        { id: 202, name: 'Nigiri de Atún', image: 'https://via.placeholder.com/150', description: 'Bocado de arroz con atún fresco.', price: 1600 },
        { id: 203, name: 'Tempura de Camarón', image: 'https://via.placeholder.com/150', description: 'Camarones fritos en tempura.', price: 1900 },
        { id: 204, name: 'Ramen de Cerdo', image: 'https://via.placeholder.com/150', description: 'Sopa de fideos con cerdo y huevo.', price: 2100 },
        { id: 205, name: 'Sashimi Variado', image: 'https://via.placeholder.com/150', description: 'Finas láminas de pescado fresco.', price: 2500 },
        { id: 206, name: 'Gyozas', image: 'https://via.placeholder.com/150', description: 'Empanadillas japonesas rellenas de cerdo.', price: 1400 }
      ]
    },
    {
      id: 3,
      name: 'Asador Argentino',
      image: 'https://via.placeholder.com/300x200',
      products: [
        { id: 301, name: 'Bife de Chorizo', image: 'https://via.placeholder.com/150', description: 'Corte de carne jugoso a la parrilla.', price: 3500 },
        { id: 302, name: 'Milanesa Napolitana', image: 'https://via.placeholder.com/150', description: 'Milanesa con salsa de tomate y queso.', price: 2300 },
        { id: 303, name: 'Empanadas Criollas', image: 'https://via.placeholder.com/150', description: 'Empanadas rellenas de carne y especias.', price: 900 },
        { id: 304, name: 'Provoleta', image: 'https://via.placeholder.com/150', description: 'Queso provolone a la parrilla.', price: 1500 },
        { id: 305, name: 'Choripán', image: 'https://via.placeholder.com/150', description: 'Chorizo en pan con chimichurri.', price: 1300 },
        { id: 306, name: 'Flan Casero', image: 'https://via.placeholder.com/150', description: 'Postre de huevo con caramelo.', price: 1100 }
      ]
    },
    {
      id: 4,
      name: 'Tacos Mexicanos',
      image: 'https://via.placeholder.com/300x200',
      products: [
        { id: 401, name: 'Tacos al Pastor', image: 'https://via.placeholder.com/150', description: 'Tacos de cerdo con piña y cilantro.', price: 1200 },
        { id: 402, name: 'Burrito de Pollo', image: 'https://via.placeholder.com/150', description: 'Tortilla rellena de pollo y frijoles.', price: 1800 },
        { id: 403, name: 'Guacamole con Totopos', image: 'https://via.placeholder.com/150', description: 'Aguacate triturado con nachos.', price: 1500 },
        { id: 404, name: 'Chiles Rellenos', image: 'https://via.placeholder.com/150', description: 'Pimientos rellenos de queso.', price: 1700 },
        { id: 405, name: 'Quesadillas', image: 'https://via.placeholder.com/150', description: 'Tortillas rellenas de queso fundido.', price: 1400 },
        { id: 406, name: 'Tamales', image: 'https://via.placeholder.com/150', description: 'Masa de maíz rellena y envuelta en hoja.', price: 1300 }
      ]
    },
    {
      id: 5,
      name: 'Burger House',
      image: 'https://via.placeholder.com/300x200',
      products: [
        { id: 501, name: 'Cheeseburger', image: 'https://via.placeholder.com/150', description: 'Hamburguesa con queso cheddar.', price: 2000 },
        { id: 502, name: 'Doble Bacon Burger', image: 'https://via.placeholder.com/150', description: 'Hamburguesa doble con bacon.', price: 2500 },
        { id: 503, name: 'Papas Fritas', image: 'https://via.placeholder.com/150', description: 'Papas crujientes con sal.', price: 900 },
        { id: 504, name: 'Aros de Cebolla', image: 'https://via.placeholder.com/150', description: 'Cebolla empanizada y frita.', price: 1100 },
        { id: 505, name: 'Milkshake de Chocolate', image: 'https://via.placeholder.com/150', description: 'Malteada cremosa de chocolate.', price: 1500 },
        { id: 506, name: 'Hot Dog', image: 'https://via.placeholder.com/150', description: 'Panchos con ketchup y mostaza.', price: 1000 }
      ]
    },
    {
      id: 6,
      name: 'Veggie Delight',
      image: 'https://via.placeholder.com/300x200',
      products: [
        { id: 601, name: 'Ensalada César', image: 'https://via.placeholder.com/150', description: 'Lechuga, pollo, crutones y aderezo.', price: 1800 },
        { id: 602, name: 'Hamburguesa Vegana', image: 'https://via.placeholder.com/150', description: 'Hamburguesa de lentejas y quinoa.', price: 2000 },
        { id: 603, name: 'Sopa de Calabaza', image: 'https://via.placeholder.com/150', description: 'Crema de calabaza con especias.', price: 1600 },
        { id: 604, name: 'Falafel', image: 'https://via.placeholder.com/150', description: 'Bolas de garbanzo fritas.', price: 1500 },
        { id: 605, name: 'Smoothie de Frutas', image: 'https://via.placeholder.com/150', description: 'Batido de frutas naturales.', price: 1400 },
        { id: 606, name: 'Pizza Vegana', image: 'https://via.placeholder.com/150', description: 'Pizza sin queso con vegetales.', price: 1900 }
      ]
    },
    {
      id: 7,
      name: 'Gloton',
      image: 'https://via.placeholder.com/300x200',
      products: [
        { id: 701, name: 'Super Hamburguesa', image: 'https://via.placeholder.com/150', description: 'Doble carne, doble queso y bacon.', price: 3000 },
        { id: 702, name: 'Mega Pizza', image: 'https://via.placeholder.com/150', description: 'Pizza gigante con todo tipo de ingredientes.', price: 3500 },
        { id: 703, name: 'Combo Glotón', image: 'https://via.placeholder.com/150', description: 'Hamburguesa, papas fritas y milkshake.', price: 4000 },
        { id: 704, name: 'Costillas BBQ', image: 'https://via.placeholder.com/150', description: 'Costillas de cerdo bañadas en salsa BBQ.', price: 3800 },
        { id: 705, name: 'Batido Gigante', image: 'https://via.placeholder.com/150', description: 'Batido de frutas de 1 litro.', price: 1800 },
        { id: 706, name: 'Hot Dog Especial', image: 'https://via.placeholder.com/150', description: 'Salchicha gigante con toppings.', price: 2200 }
      ]
    },
    {
      id: 8,
      name: 'Argumentos',
      image: 'https://via.placeholder.com/300x200',
      products: [
        { id: 801, name: 'Café Gourmet', image: 'https://via.placeholder.com/150', description: 'Café de especialidad con granos seleccionados.', price: 1000 },
        { id: 802, name: 'Té Chai Latte', image: 'https://via.placeholder.com/150', description: 'Infusión de té negro con especias.', price: 1200 },
        { id: 803, name: 'Tarta de Manzana', image: 'https://via.placeholder.com/150', description: 'Tarta dulce con trozos de manzana.', price: 1500 },
        { id: 804, name: 'Croissant de Chocolate', image: 'https://via.placeholder.com/150', description: 'Croissant relleno de chocolate.', price: 1300 },
        { id: 805, name: 'Cheesecake', image: 'https://via.placeholder.com/150', description: 'Tarta de queso con frutos rojos.', price: 1700 },
        { id: 806, name: 'Sandwich de Jamón y Queso', image: 'https://via.placeholder.com/150', description: 'Pan crocante con jamón y queso derretido.', price: 1400 }
      ]
    }
  ];


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.restaurantId = Number(params['id']);
      const restaurant = this.allRestaurants.find(r => r.id === this.restaurantId);
      if (restaurant) {
        this.restaurantName = restaurant.name;
        this.products = restaurant.products;
      }
    });
  }

  // Función para dividir los productos en grupos de 3 por slide
  getProductGroups(): any[] {
    const chunkSize = 3;
    const groups = [];
    for (let i = 0; i < this.products.length; i += chunkSize) {
      groups.push(this.products.slice(i, i + chunkSize));
    }
    return groups;
  }


}
