import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';

import { ProductEntity } from '../product/product.entity';

const fsPromises = fs.promises;
const pathOfUrl = 'http://31.202.177.131:5200/'; /* 'http://localhost:4200/'; */

@Injectable()
export class FileService {
  private async ensureDirectoryExists(filePath: string): Promise<void> {
    try {
      await fsPromises.access(filePath);
    } catch (e) {
      await fsPromises.mkdir(filePath, { recursive: true });
    }
  }

  private getFilePath(fileName: string): string {
    return path.resolve(
      __dirname,
      '..',
      'static',
      fileName.replace(pathOfUrl, ''),
    );
  }

  async checkFileExists(fileName: string): Promise<boolean> {
    try {
      await fsPromises.access(this.getFilePath(fileName));
      return true;
    } catch (err) {
      return false;
    }
  }

  async create(file: Express.Multer.File): Promise<string> {
    const name = file.originalname.split('.').shift();
    const extension = file.mimetype.split('/').pop();
    const fileName = `${name}.${extension}`;
    const filePath = path.resolve(__dirname, '..', 'static');

    const fileExists = await this.checkFileExists(fileName);

    if (fileExists) {
      throw new HttpException(
        `The file ${fileName} exists already`,
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      await this.ensureDirectoryExists(filePath);
      await fsPromises.writeFile(path.join(filePath, fileName), file.buffer);

      return `${pathOfUrl}${fileName}`;
    } catch (e) {
      throw new HttpException(
        'An error occurred while writing the file',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(fileName: string): Promise<void> {
    const fileExists = await this.checkFileExists(fileName);

    if (!fileExists) {
      throw new HttpException(
        `The file ${fileName.replace(pathOfUrl, '')} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const filePath = this.getFilePath(fileName);
      await fsPromises.unlink(filePath);
    } catch (e) {
      throw new HttpException(
        `An error occurred while deleting the file ${fileName}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteAll(products: ProductEntity[]): Promise<void> {
    const imagesArray = products.reduce((acc, product) => {
      if (product.img_url) {
        acc.push(product.img_url);
      }
      return acc;
    }, []);

    try {
      await Promise.all(imagesArray.map((img) => this.delete(img)));
    } catch (e) {
      throw new HttpException(e?.response, HttpStatus.BAD_REQUEST);
    }
  }
}
