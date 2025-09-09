import { Type } from 'class-transformer';
import { IsArray, IsInt, IsString, Min, ValidateNested } from 'class-validator';

class CreateOrderItemDto {
  @IsString() productId!: string;
  @IsInt() @Min(1) quantity!: number;
}

export class CreateOrderDto {
  @IsArray() @ValidateNested({ each: true }) @Type(() => CreateOrderItemDto)
  items!: CreateOrderItemDto[];
}
