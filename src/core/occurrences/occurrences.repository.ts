import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class OccurrenceRepository {
  constructor(private prisma: PrismaService) {}
}
