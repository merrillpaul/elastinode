import { ESClient } from '../src/elasticache';

test('start a es client', () => {
    const client: ESClient = new ESClient();
    client.ping();
    expect(true).toBeTruthy();
});


test('add doc', () => {
    const client: ESClient = new ESClient();
    client.addDoc();
    expect(true).toBeTruthy();
});