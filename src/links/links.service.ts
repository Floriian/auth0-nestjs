import { Injectable } from '@nestjs/common';

@Injectable()
export class LinksService {
  #links: Array<{ baseUrl: string; shortUrl: string }> = [
    {
      baseUrl: 'https://google.com',
      shortUrl: 'sdkflawsjdf',
    },
  ];

  getLinks() {
    return this.#links;
  }
}
