import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {

  @ApiProperty({
    description: 'The content of the comment',
    example: 'This post is very helpful!',
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  message!: string;

  @ApiProperty({
    description: 'Name of the person who wrote the comment',
    example: 'Alice Smith',
  })
  @IsString()
  @IsNotEmpty()
  authorName!: string;

  @ApiProperty({
    description: 'ID of the post this comment belongs to',
    example: 1
  })
  @IsInt()
  @Min(1)
  postId!: number;

}