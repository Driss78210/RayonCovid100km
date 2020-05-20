

export class Adresse{

    public libelle: string;
    public ville: string;
    public codePostale: string;
    public longitude: number;
    public latitude: number;

    constructor(libelle, ville, codePostale, longitude, latitude){
        this.libelle  = libelle;
        this.ville = ville;
        this.codePostale = codePostale;
        this.longitude = longitude;
        this.latitude = latitude;
    }

}