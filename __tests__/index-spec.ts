import * as index from '../src/index';

test('Should have Greeter available', () => {
  	console.log(`Tester`);
	expect(index.Greeter).toBeTruthy();
});
