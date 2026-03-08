import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comment/comment.module';

@Module({
  imports: [
    PostsModule,
    CommentsModule,
  ],
})
export class AppModule {}