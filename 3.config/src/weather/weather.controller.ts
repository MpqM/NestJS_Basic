import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Controller('weather')
export class WeatherController {
  constructor(private configSerivce: ConfigService) {}

  @Get()
  async getweahter() {
    const apiUrl = this.configSerivce.get('WEATHER_API_URL');
    const apiKey = this.configSerivce.get('WEATHER_API_KEY');
    return await this.callWheatherApi(apiUrl, apiKey);
  }

  async callWheatherApi(apiUrl: string, apiKey: string): Promise<string> {
    console.log('날씨 정보 가져오는 중...');
    console.log(apiUrl);
    const url = `${apiUrl}${apiKey}`;
    const result = await axios.get(url);
    const weather = result.data;
    const mains = weather.weather.map((el) => el.main);
    return mains.join(' and ');
  }
}
