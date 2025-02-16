import { Controller, Get, Post, Query } from '@nestjs/common';
import { RoomsService } from '../services/rooms.service';

@Controller('api/rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) { }

    @Get()
    listRooms() {
        return this.roomsService.getAvailableRooms();
    }

    @Post('book')
    bookRoom(
        @Query('type') type: number,
        @Query('guest') guest: string
    ) {
        return this.roomsService.bookRoom(Number(type), guest);
    }

    @Get('guests')
    listGuests() {
        return this.roomsService.getGuests();
    }
}
