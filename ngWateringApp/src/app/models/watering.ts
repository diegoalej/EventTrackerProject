export class Watering {
    id: number;
    userName: string;
    plantName: string;
    location: string;
    nextWateringdate: string;
    lastWateringdate: string;
    description: string;
    constructor(
        id?: number,
        userName?: string,
        plantName?: string,
        location?: string,
        nextWateringdate?: string,
        lastWateringdate?: string,
        description?: string
    ) {
        this.id = id;
        this.userName = userName;
        this.plantName = plantName;
        this.location = location;
        this.nextWateringdate = nextWateringdate;
        this.lastWateringdate = lastWateringdate;
        this.description = description;
    }

}
