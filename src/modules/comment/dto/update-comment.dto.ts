import { IsString, IsNotEmpty, IsInt, MinLength, MaxLength, IsOptional} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
    @IsOptional()
    @ApiProperty({
        description: 'The content of the comment',
        example: 'This post is very helpful!',
        minLength: 1,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    message!: string;
    @MaxLength(100)

    @IsOptional()
    @ApiProperty({
        description: 'Name of the person who wrote the comment',
        example: 'Alice Smith',
    })
    @IsString()
    @IsNotEmpty()
    authorName!: string;

    @IsOptional()
    @ApiProperty({
        description: 'ID of the post this comment belongs to',
        example: 1,
    })
    @IsInt() 
    @IsNotEmpty()
    postId!: number;
    
    @IsInt()
    @IsOptional()
    @ApiProperty({
        description: 'The rating given in the comment (1-5)',
        example: 4,
        minimum: 1,
        maximum: 5,
    })
    rating?: number;
}