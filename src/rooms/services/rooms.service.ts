import { Injectable } from '@nestjs/common';
import { RoomsRepository } from '../repositories/rooms.repository';

@Injectable()
export class RoomsService {
    constructor(private readonly roomsRepository: RoomsRepository) { }

    getAvailableRooms() {
        return this.roomsRepository.listRooms();
    }

    bookRoom(type: number, guest: string) {
        return this.roomsRepository.bookRoom(type, guest);
    }

    getGuests() {
        return this.roomsRepository.listGuests();
    }
}
