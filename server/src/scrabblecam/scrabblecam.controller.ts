import { Controller, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import axios from 'axios';
import * as FormData from 'form-data';
import { Agent } from 'https';

@Controller('scrabblecam')
export class ScrabblecamController {
  @Post('process')
  @UseInterceptors(FileInterceptor('file')) // Nazwa pola z frontendu
  async processImage(@UploadedFile() file: any) {
    try {
      const formData = new FormData();
      formData.append('file', file.buffer, {
        filename: file.originalname,
        contentType: file.mimetype,
      });
      formData.append('lang', 'EN');

      const httpsAgent = new Agent({
        rejectUnauthorized: false, // Ignoruje wygasły certyfikat
      });

      const response = await axios.post('https://scrabblecam.com/process', formData, {
        headers: {
          ...formData.getHeaders(),
        },
        httpsAgent,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });

      return response.data;
    } catch (error) {
      console.error('Error processing image:', error.message);
      throw new HttpException(
        error.response?.data || 'Failed to process image',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
