import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Reglas} from '../models';
import {ReglasRepository} from '../repositories';

export class ReglasController {
  constructor(
    @repository(ReglasRepository)
    public reglasRepository : ReglasRepository,
  ) {}

  @post('/reglas')
  @response(200, {
    description: 'Reglas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Reglas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reglas, {
            title: 'NewReglas',
            exclude: ['id'],
          }),
        },
      },
    })
    reglas: Omit<Reglas, 'id'>,
  ): Promise<Reglas> {
    return this.reglasRepository.create(reglas);
  }

  @get('/reglas/count')
  @response(200, {
    description: 'Reglas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Reglas) where?: Where<Reglas>,
  ): Promise<Count> {
    return this.reglasRepository.count(where);
  }

  @get('/reglas')
  @response(200, {
    description: 'Array of Reglas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Reglas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Reglas) filter?: Filter<Reglas>,
  ): Promise<Reglas[]> {
    return this.reglasRepository.find(filter);
  }

  @patch('/reglas')
  @response(200, {
    description: 'Reglas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reglas, {partial: true}),
        },
      },
    })
    reglas: Reglas,
    @param.where(Reglas) where?: Where<Reglas>,
  ): Promise<Count> {
    return this.reglasRepository.updateAll(reglas, where);
  }

  @get('/reglas/{id}')
  @response(200, {
    description: 'Reglas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Reglas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Reglas, {exclude: 'where'}) filter?: FilterExcludingWhere<Reglas>
  ): Promise<Reglas> {
    return this.reglasRepository.findById(id, filter);
  }

  @patch('/reglas/{id}')
  @response(204, {
    description: 'Reglas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reglas, {partial: true}),
        },
      },
    })
    reglas: Reglas,
  ): Promise<void> {
    await this.reglasRepository.updateById(id, reglas);
  }

  @put('/reglas/{id}')
  @response(204, {
    description: 'Reglas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() reglas: Reglas,
  ): Promise<void> {
    await this.reglasRepository.replaceById(id, reglas);
  }

  @del('/reglas/{id}')
  @response(204, {
    description: 'Reglas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.reglasRepository.deleteById(id);
  }
}
