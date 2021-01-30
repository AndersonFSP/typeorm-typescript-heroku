import { Router, Response, Request, request} from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.get('/', async (request: Request, response: Response) => {
  return  response.json(
      await getRepository(Class).find()
    )
});

classRouter.get('/:name', async(request: Request, response: Response ) => {
  const repository =  getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);

});

classRouter.post('/', async (request: Request,  response: Response) => {
  try {
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (error) {
    console.log(error)
  }
});

export default classRouter;