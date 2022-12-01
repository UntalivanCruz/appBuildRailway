import {Entity, model, property} from '@loopback/repository';

@model()
export class Reglas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidadRegalos: number;

  @property({
    type: 'number',
    required: true,
  })
  montoMinimo: number;

  @property({
    type: 'string',
    required: true,
  })
  tema: string;

  @property({
    type: 'boolean',
    default: true,
  })
  secreto?: boolean;


  constructor(data?: Partial<Reglas>) {
    super(data);
  }
}

export interface ReglasRelations {
  // describe navigational properties here
}

export type ReglasWithRelations = Reglas & ReglasRelations;
