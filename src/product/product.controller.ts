import { Controller, Get } from '@nestjs/common';

@Controller("product")
export class ProductController {
  constructor() {}

  @Get()
  getHello(): string {
    return "product controller"
  }
}