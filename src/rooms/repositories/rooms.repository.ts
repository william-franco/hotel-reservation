import { Injectable, Logger } from '@nestjs/common';
import { Room } from '../models/room.model';

@Injectable()
export class RoomsRepository {
    private readonly logger = new Logger(RoomsRepository.name);

    private rooms: Room[] = [
        new Room(1, 0, 55, 10),
        new Room(2, 1, 75, 20),
        new Room(3, 2, 80, 5),
        new Room(4, 3, 150, 3),
        new Room(5, 4, 230, 2),
    ];

    private reservations: { guest: string; roomType: number }[] = [];

    listRooms(): Room[] {
        this.logger.log('Returning all rooms.');
        return this.rooms;
    }

    bookRoom(type: number, guest: string): string {
        const room = this.rooms.find(r => r.type === type && r.available > 0);
        if (!room) return 'Quarto indisponível';

        room.available -= 1;
        this.reservations.push({ guest, roomType: type });

        this.logger.log(`Reserva confirmada para ${guest} no quarto tipo ${type}`);
        return `Reserva confirmada para ${guest} no quarto tipo ${type}`;
    }

    listGuests(): string[] {
        const guest = this.reservations.map(r => r.guest);
        this.logger.log(`Returning guest: ${guest}`);
        return guest;
    }
}
