import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty() id!: string;
  @ApiProperty() name!: string;
  @ApiProperty() slug!: string;
  @ApiProperty() sku!: string;
  @ApiProperty() priceCents!: number;
  @ApiProperty() currency!: string;
  @ApiProperty() stock!: number;
}
