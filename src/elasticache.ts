import { Client } from 'elasticsearch';

export class ESClient {
    private client: Client;

    constructor() {
        this.client = new Client({
            host: 'localhost:9200',
            log: 'trace'
        });
    }

    public ping(): void {
        console.log('Tester Ping');
        this.client.ping({ requestTimeout: 30000 })
            .then(res => {
                console.log(res);
                console.log(`Client pinged`);
            })
            .catch(e => console.error(e));
    }


    public addDoc(): void {
        
        /*this.client.indices.create({
            index: 'gov'
        }, (err, resp, status) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("create", resp);*/
                this.client.index({
                    index: 'gov',
                    id: '2',
                    type: 'audits',
                    body: {
                        "ClientName": "XenoMorph",
                        "Type": "HomeUI",
                        "UserName": "Dene",
                        "BusinessUnit": "Pearson NCS",
                        "ValidVotes": 233,
                    }
                }, (err, resp) => {
                    console.log(err, resp);
                });
            }
        //});
    }

}
