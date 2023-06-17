import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentServer: StudentService) {}

  @Query((returns) => StudentType)
  async student(@Args('id') id: string) {
    return this.studentServer.getStudent(id);
  }

  @Query((returns) => [StudentType])
  async students() {
    return this.studentServer.getStudents();
  }

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentServer.createStudent(createStudentInput);
  }
}
