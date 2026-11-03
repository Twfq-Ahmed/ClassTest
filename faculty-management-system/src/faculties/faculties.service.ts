import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculties } from './entities/faculties.entity.js';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculties)
    private readonly facultiesRepo: Repository<Faculties>,
  ) {}

  async createFaculties(faculty: CreateFacultyDto): Promise<string> {
    try {
      const faclt = await this.facultiesRepo.create(faculty);
      const f = await this.facultiesRepo.save(faclt);
      if (f) {
        return 'Faculty created successfully';
      } else {
        return 'Faculty creation failed';
      }
    } catch {
      throw new BadRequestException('Failed to create due to DB error');
    }
  }
}
