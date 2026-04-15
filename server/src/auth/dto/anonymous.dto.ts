import { IsUUID } from 'class-validator';

export class AnonymousDto {
  @IsUUID()
  deviceToken: string;
}
