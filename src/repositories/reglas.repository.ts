import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Reglas, ReglasRelations} from '../models';

export class ReglasRepository extends DefaultCrudRepository<
  Reglas,
  typeof Reglas.prototype.id,
  ReglasRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Reglas, dataSource);
  }
}
