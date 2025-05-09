
export interface TableCustomer {
  name: string;
  partySize: number;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  tipo_cocina: 'buffet' | 'cocina adentro' | 'cocina afuera';
}

// Relaciona un alimento con una cantidad seleccionada.
export interface TableFoodItem extends MenuItem {
  instanceId: string; // Unique identifier for this specific instance
  quantity: number;
  nota: string;
  precioExtra: number;
  sodaId: string;
}

