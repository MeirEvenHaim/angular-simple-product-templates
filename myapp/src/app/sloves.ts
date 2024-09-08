export interface Sloves {
    id: number;            // Unique identifier
    name: string;          // Name of the item
    price: number | null;  // Price, nullable
    desc: string;          // Description of the item
    image?: string;        // Image URL, optional as it may not always be provided
    birth: Date;           // Date when the record was created
  }
  